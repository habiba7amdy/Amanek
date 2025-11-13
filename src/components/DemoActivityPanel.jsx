import React from "react";

export default function DemoActivityPanel({ demoLog = [] }) {
  return (
    <div className="mt-6 border border-pink-200 p-5 rounded-2xl bg-pink-50 shadow-sm">
      <h2 className="font-bold text-xl text-pink-700 mb-3 text-center">
        Demo Activity Panel / لوحة الأنشطة التجريبية
      </h2>

      {demoLog.length === 0 ? (
        <p className="text-gray-600 text-center">No demo actions yet / لا توجد أنشطة بعد.</p>
      ) : (
        <div className="space-y-3">
          {demoLog.map((log) => (
            <div
              key={log.id}
              className="p-3 bg-white rounded-lg shadow-sm border border-pink-100 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-pink-600">{log.contact} <span className="text-gray-600 text-sm">({log.phone})</span></p>
              <p className="text-gray-800 mt-1"><strong>Message:</strong> {log.message}</p>
              <p className="text-green-600 mt-1"><strong>Status:</strong> {log.status}</p>
              <p className="text-gray-500 text-sm mt-1">{log.timestamp}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}