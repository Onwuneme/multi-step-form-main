export default function Step1({ personalInfo, setpersonalInfo, error }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setpersonalInfo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <h1>Personal info</h1>
      <h4>Please provide your name, email address, and phone number</h4>
      <div className="my-5">
        <div className="flex flex-col mb-3">
          <label className={ `${error.name && 'flex justify-between items-center ' }`}>
            Name
            <p className=" text-sm text-red-500">
              {error.name}
            </p>
          </label>
          <input
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
            className={`${error.name ? 'border-red-500': 'border-gray-500'} border duration-500 hover:border-purple-800  rounded pl-3 py-2`}
            onChange={handleChange}
            value={personalInfo.name}
          />
        </div>
        <div className="flex flex-col mb-3 ">
          <label className={ `${error.email && 'flex justify-between items-center ' }`}>
             Email Address
             <p className="text-sm text-red-500">{error.email}</p>
             </label>
          <input
            name="email"
            type="text"
            placeholder="e.g stephenKing@lorem.com"
            className={`${error.email ? 'border-red-500': 'border-gray-500'} border duration-500 hover:border-purple-800  rounded pl-3 py-2`}
            onChange={handleChange}
            value={personalInfo.email}
          />
          
        </div>
        <div className="flex flex-col mb-3 ">
          <label className={ `${error.phone && 'flex justify-between items-center ' }`}> 
            Phone Number
            <p className="text-sm text-red-500">{error.phone}</p>
            </label>
          <input
            name="phone"
            type="number"
            placeholder="e.g. +1 234 567 890"
            className={`${error.phone ? 'border-red-500': 'border-gray-500'} border duration-500 hover:border-purple-800  rounded pl-3 py-2`}
            onChange={handleChange}
            value={personalInfo.phone}
          />
        </div>
      </div>
    </>
  );
}
