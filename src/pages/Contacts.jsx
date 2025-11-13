import React from "react";

export default function Contacts({ demoMode }) {
  const demoContacts = [
    "Mona — +201546268221",
    "Sara — +201004526842",
    "Nour — +201124646623",
    "Hend — +201224642664",
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trusted Contacts / جهات الاتصال الموثوقة</h1>
      <ul className="list-disc pl-5 space-y-2">
        {demoContacts.map((c, i) => (
          <li key={i}>{c} {demoMode}</li>
        ))}
      </ul>
      <button className="mt-4 bg-pink-400 text-white px-4 py-2 rounded">Add Contact</button>
    </div>
  );
}
