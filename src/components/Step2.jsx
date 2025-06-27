


const payment = [
  {
    id: "Arcade",
    image: "./src/assets/icon-arcade.svg",
    monthly: "$9/mo",
    Yearly: {
      yr: "$90/yr",
      free: "2 months free",
    },
  },
  {
    id: "Advanced",
    image: "./src/assets/icon-advanced.svg",
    monthly: "$12/mo",
    Yearly: {
      yr: "$120/yr",
      free: "2 months free",
    },
  },
  {
    id: "Pro",
    image: "./src/assets/icon-pro.svg",
    monthly: "$15/mo",
    Yearly: {
      yr: "$150/yr",
      free: "2 months free",
    },
  },
];

export default function Step2({ paymentOffer, setPaymentOffer }) {
  const handleClick = (id) => {
    const selected = payment.find((item) => item.id === id);
    const deal =
    paymentOffer.time === "monthly"
        ? selected.monthly
        : selected.Yearly.yr;
    setPaymentOffer({
      plan: id,
      time: paymentOffer.time,
      Deal:deal
    });
  };
  const toggleBilling = () => {
    const newTime = paymentOffer.time === "monthly" ? "yearly" : "monthly";
    setPaymentOffer((prev) => ({
      ...prev,
      time: newTime,
    }));
  };

  return (
    <>
      <div>
        <h1 >Select your plan</h1>
        <h4 className=" text-slate-500">
          You have the option of monthly or yearly billing
        </h4>

        <div className="gap-4 mt-5 flex flex-col md:flex-row">
          {payment.map((price) => (
            <div
              key={price.id}
              onClick={() => handleClick(price.id)}
              className={`p-3 h-20 md:h-40 md:w-30 border rounded-2xl duration-500 hover:border-purple-800  ${price.id === paymentOffer.plan ?' border-purple-950 bg-purple-50':'border-gray-400' }`}
            >
              <div className="flex gap-2 items-center md:items-start md:flex-col">
                <img src={price.image} alt={price.id} />
                <div>
                  <p className="font-semibold text-slate-700">{price.id}</p>
                  <p className="text-sm text-slate-500">
                    {paymentOffer.time === "monthly"
                      ? price.monthly
                      : price.Yearly.yr}
                  </p>
                  {paymentOffer.time === "yearly" && (
                    <p className="text-xs text-blue-950 font-medium">
                      {price.Yearly.free}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-5 justify-center items-center my-3 py-3 bg-purple-50">
          <p
            className={`text-sm font-medium ${
             paymentOffer.time === "monthly" ? "text-blue-900" : "text-gray-500"
            }`}
          >
            Monthly
          </p>
          <button
            onClick={toggleBilling}
            type="button"
            className={`bg-blue-950 px-1 w-10 h-5 rounded-full flex items-center ${
            paymentOffer.time === "yearly" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </button>
          <p
            className={`text-sm font-medium ${
              paymentOffer.time === "yearly" ? "text-blue-900" : "text-gray-500"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
    </>
  );
}
