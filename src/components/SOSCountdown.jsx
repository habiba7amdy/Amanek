import { useState, useEffect } from "react";

export default function SOSCountdown({ onComplete }) {
  const [count, setCount] = useState(null);

  const startCountdown = () => setCount(5);

  useEffect(() => {
    if (count === null) return;
    if (count === 0) {
      onComplete();
      setCount(null);
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      {count === null ? (
        <button className="bg-red-500 text-white px-6 py-4 rounded text-xl" onClick={startCountdown}>
          SOS
        </button>
      ) : (
        <div className="text-xl font-bold text-red-600">
          Emergency in: {count}s
          <button onClick={() => setCount(null)} className="ml-4 underline text-sm">Cancel</button>
        </div>
      )}
    </div>
  );
}
