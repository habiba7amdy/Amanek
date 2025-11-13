import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import sampleVideo from "/sample-demo.mp4";

export default function SOS({ demoMode }) {
  const [countdown, setCountdown] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [smsLog, setSmsLog] = useState([]);
  const [sosComplete, setSosComplete] = useState(false);
  const intervalRef = useRef(null); // store interval id so we can clear it

  // demo static location
  const demoLocation = { label: "Safe Street", lat: 31.2001, lng: 29.9187 };
  const [lastSeen, setLastSeen] = useState(null);

  const demoContacts = [
    { name: "Mona", phone: "+201546268221" },
    { name: "Sara", phone: "+201004526842" },
    { name: "Nour", phone: "+201124646623" },
    { name: "Hend", phone: "+201224642664" },
  ];

  const startSOS = () => {
    // prevent starting if already running
    if (countdown !== null) return;

    let seconds = 8;
    setCountdown(seconds);

    // create interval and keep its id
    intervalRef.current = setInterval(() => {
      seconds -= 1;
      setCountdown(seconds);
      if (seconds <= 0) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setCountdown(null);
        runDemoFlow();
      }
    }, 1000);
  };

  const cancelSOS = () => {
    // clear interval if running
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // reset countdown and do not run the flow
    setCountdown(null);

    // optional: give user feedback (toast/alert). keep simple here:
    setSosComplete(false);
    setShowVideo(false);
    setShowMap(false);
    setSmsLog([]);
    setLastSeen(null);
  };

  const runDemoFlow = () => {
    // show demo video
    setShowVideo(true);

    // simulate sms log
    const log = demoContacts.map((contact) => ({
      time: new Date().toLocaleTimeString(),
      destination: contact.phone,
      message: `SOS! I'm in danger — Location: Demo Location — Amanaki (Demo)`,
      status: "Delivered",
    }));
    setSmsLog(log);

    // set demo last seen time
    const now = new Date();
    setLastSeen(now.toLocaleString());

    // show map
    setShowMap(true);

    setSosComplete(true);
  };

  return (
    <div className="text-center space-y-6 p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">SOS / الطوارئ</h1>

      {/* SOS button */}
      {countdown === null && !sosComplete && (
        <button
          onClick={startSOS}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          SOS
        </button>
      )}

      {/* Countdown + Cancel */}
      {countdown !== null && countdown > 0 && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-xl">Countdown: {countdown} sec</p>

          <div className="flex gap-3">
            <button
              onClick={cancelSOS}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") cancelSOS();
              }}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Cancel SOS"
            >
              Cancel / إلغاء
            </button>

            {/* optional: small note */}
            <span className="text-sm text-gray-600 self-center">
              Click Cancel to stop the alert / اضغطي إلغاء لإيقاف البلاغ
            </span>
          </div>
        </div>
      )}

      {/* Demo Video */}
      {showVideo && (
        <div className="mt-4">
          <h2 className="font-semibold">Demo Video Recording</h2>
          <video
            src={sampleVideo}
            controls
            className="mx-auto mt-2 rounded-lg shadow-lg max-w-full"
          />
        </div>
      )}

      {/* Demo Map with last seen displayed above map */}
      {showMap && (
        <div className="mt-4">
          <h2 className="font-semibold">Demo Map / خريطة توضيحية</h2>
          {lastSeen && (
            <p className="text-sm text-gray-600 mt-1">
              Last seen / آخر ظهور: {lastSeen}
            </p>
          )}
          <div className="mt-3 rounded-lg overflow-hidden shadow-md">
            <MapContainer
              center={[demoLocation.lat, demoLocation.lng]}
              zoom={16}
              scrollWheelZoom={false}
              style={{ height: "320px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={[demoLocation.lat, demoLocation.lng]}>
                <Popup>
                  <div className="text-sm">
                    <strong>{demoLocation.label}</strong>
                    <br />
                    Demo only — not a real location
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      )}

      {/* Demo SMS Log */}
      {smsLog.length > 0 && (
        <div className="mt-4 text-left">
          <h2 className="font-semibold">Demo SMS Log</h2>
          <ul className="list-disc pl-5">
            {smsLog.map((sms, i) => (
              <li key={i}>
                {sms.time} — To: {sms.destination} — Status: {sms.status}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Demo mode notice */}
      {demoMode && (
        <p className="text-gray-700 mt-4">
          Demo Mode Active — no real SMS sent, and no real location used.
        </p>
      )}
    </div>
  );
}
