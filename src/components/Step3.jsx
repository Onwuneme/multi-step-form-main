const services = [
  {
    id: "online",
    title: "Online service",
    desc: "Access to multiplayer games",
    price: { year: "$10/yr", monthly: "$1/mo" },
  },
  {
    id: "storage",
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: { year: "$20/yr", monthly: "$2/mo" },
  },
  {
    id: "profile",
    title: "Customizable profile",
    desc: "Custom theme on your profile",
    price: { year: "$20/yr", monthly: "$2/mo" },
  },
];

export default function Step3({ addOns, setAddOns, time }) {
  const handleChange = (item) => {
    const alreadyAdded = addOns.find((i) => i.id === item.id);
    const selectedPrice =
      time === "monthly" ? item.price.monthly : item.price.year;

    if (alreadyAdded) {
      setAddOns((prev) => prev.filter((i) => i.id !== item.id));
    } else {
      setAddOns((prev) => [
        ...prev,
        {
          id: item.id,
          title: item.title,
          price: selectedPrice,
        },
      ]);
    }
  };

  console.log(addOns);
  return (
    <div>
      <h1>Pick add-ons</h1>
      <h4>Add-ons help enhance your gaming experience</h4>
      <div className="space-y-4 mt-5">
        {services.map((item) => (
          <label
            key={item.id}
            className={`flex items-center justify-between border rounded-lg p-4 ${
              addOns.some((i) => i.id === item.id)
                ? "bg-purple-100 border-purple-600"
                : " border-gray-300"
            } `}
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={ addOns.some((i) => i.id === item.id)}
                onChange={() => handleChange(item)}
                className="w-5 h-5 accent-purple-600 rounded"
              />
              <div>
                <p className="font-semibold text-slate-800">{item.title}</p>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
            <p className="text-sm text-purple-600 font-medium">
              {time === "monthly" ? item.price.monthly : item.price.year}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
}
