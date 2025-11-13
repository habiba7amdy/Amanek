import React from "react";

export default function Policies() {
  return (
    <div className="space-y-6 p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Policies & Terms / السياسات والشروط
      </h1>

      {/* Terms & Conditions */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Terms & Conditions / الشروط والأحكام</h2>
        <p>
           By using Amanek, you agree to use the service responsibly, follow all safety instructions, and only report real emergencies. Any misuse of the app may result in suspension or termination of your account.
        </p>
        <p>
           باستخدام تطبيق أمانك، فإنك توافقين على استخدام الخدمة بمسؤولية، واتباع جميع تعليمات السلامة، والإبلاغ عن حالات الطوارئ الحقيقية فقط. أي سوء استخدام للتطبيق قد يؤدي إلى تعليق أو إنهاء حسابكِ.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Privacy Policy / سياسة الخصوصية</h2>
        <p>
           Amanek respects your privacy. We collect only the minimum necessary data, such as your location during emergencies and trusted contacts. Your personal data will never be shared with third parties without your consent.
        </p>
        <p>
           يحترم تطبيق أمانك خصوصيتكِ. نحن نجمع الحد الأدنى من البيانات الضرورية، مثل موقعكِ أثناء الطوارئ وجهات الاتصال الموثوقة. لن يتم مشاركة بياناتكِ الشخصية مع أي طرف ثالث بدون موافقتكِ.
        </p>
      </section>

      {/* False Report Warning */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-red-600">
          False Report Warning / تحذير البلاغ الكاذب
        </h2>
        <p>
          Reporting a false emergency is strictly prohibited. False reports may cause unnecessary panic, waste resources, and put responders at risk. Repeated misuse may result in legal action or permanent account suspension.
        </p>
        <p>
           يمنع منعاً باتاً تقديم بلاغ كاذب. البلاغات الكاذبة تسبب الذعر غير الضروري، وإهدار الموارد، والتشهير بأشخاص أبرياء . أي سوء استخدام متكرر  يؤدي إلى اتخاذ الإجراءات اللازمة والمحاسبات القانونية و تعليق الحساب بشكل دائم.
        </p>
      </section>

      {/* Agreement Checkbox */}
      <section>
        <label className="flex items-center space-x-2 mt-4">
          <input type="checkbox" className="accent-pink-600" />
          <span>
             I have read and agree /  لقد قرأت ووافقت
          </span>
        </label>
      </section>
    </div>
  );
}
