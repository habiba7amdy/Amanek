import React from "react";

export default function Home() {
  return (
    <div className="text-center space-y-6 p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">أمانك — Amanek</h1>
      <p className="text-lg text-gray-700">
        أهلاً بكِ في أمانكِ — هنا خطوات سريعة وبسيطة لاستخدام التطبيق عند الطوارئ.
      </p>

      {/* Three simple steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Step 1 */}
        <div className="p-4 bg-gradient-to-b from-pink-50 via-pink-100 to-white rounded-2xl shadow-sm">
          <div className="text-4xl mb-2">①</div>
          <h2 className="font-semibold text-lg mb-1">اضغطي الزر / Press the Button</h2>
          <p className="text-sm text-gray-700 mb-3">
            اضغطي زر النجدة الأحمر فور شعورك بالخطر — التطبيق سيبدأ العد التنازلي. 
          </p>
          <p className="text-sm text-gray-600 italic">
            Press the red <span className="font-medium">SOS</span> button when you feel unsafe — the app will start a countdown.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-4 bg-gradient-to-b from-pink-50 via-pink-100 to-white rounded-2xl shadow-sm">
          <div className="text-4xl mb-2">②</div>
          <h2 className="font-semibold text-lg mb-1">صوري المهاجم بالكاميرا الخلفية / Record with Back Camera</h2>
          <p className="text-sm text-gray-700 mb-3">
            سيتم اقتراح تسجيل فيديو سريع باستخدام الكاميرا الخلفية — يساعد في إثبات الحادث ومشاركة موقعكِ.
          </p>
          <p className="text-sm text-gray-600 italic">
            The app will suggest a short recording with the back camera — useful as evidence and for location sharing.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-4 bg-gradient-to-b from-pink-50 via-pink-100 to-white rounded-2xl shadow-sm">
          <div className="text-4xl mb-2">③</div>
          <h2 className="font-semibold text-lg mb-1">انتظري نتيجة البلاغ / Wait for Report Result</h2>
          <p className="text-sm text-gray-700 mb-3">
            بعد الإرسال التجريبي سيظهر سجل الحوادث، الخريطة، وتأكّدات (محاكاة) لوصول التنبيهات للمسؤولين أو جهات الاتصال.
          </p>
          <p className="text-sm text-gray-600 italic">
            After sending (demo) you’ll see the incident log, map, and simulated confirmations that alerts were delivered.
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-600">
        ملاحظة: في النسخة التجريبية كل الإجراءات محاكاة — لا تُرسَل رسائل حقيقية ولا يتم استخدام موقعك الفعلي.
        <br />
        Note: In <span className="font-medium">Demo Mode</span> all actions are simulated — no real messages sent and no real location used.
      </p>
    </div>
  );
}
