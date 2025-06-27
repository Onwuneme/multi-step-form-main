export default function Step4({ formData }) {
  const planPrice = parseFloat(
    formData.paymentOffer.Deal.replace(/[^0-9.]/g, "")
  );
  const addOnsPrice = formData.addOns.reduce((total, item) => {
   return total + parseFloat(item.price.replace(/[^0-9.]/g, ""));
  }, 0);
  const Total = planPrice + addOnsPrice;
  return (
    <>
      <div>
        <h1>Finishing up</h1>
        <h4>Double-check everything looks OK before confirming</h4>
        <div className="mt-5 rounded-2xl bg-purple-50 p-4 text-sm  ">
          <div className=" flex items-center justify-between text-slate-800 font-bold  pb-4 border-b border-gray-300 ">

            <h2>
              {formData.paymentOffer.plan} ({formData.paymentOffer.time})
              <p className="font-light underline duration-500 hover:text-purple-800">change</p>
            </h2>
            <h2>{formData.paymentOffer.Deal}</h2>
          </div>
          <div>
            {formData.addOns.map((item) => (
              <div
                key={item.id}
                className=" flex item-center   justify-between mt-3   "
              >
                <p className="text-gray-400">{item.title}</p>
                <p className="text-gray-700">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4  flex items-center justify-between">
          <p className="text-gray-400 text-sm ">
            Total(
            {formData.paymentOffer.time === "monthly"
              ? "per month"
              : "per year"}
            )
          </p>
          <p className="text-purple-900 font-bold">${Total}{formData.paymentOffer.time ==="monthly" ? '/mo' :'/yr'}</p>
        </div>
      </div>
    </>
  );
}
