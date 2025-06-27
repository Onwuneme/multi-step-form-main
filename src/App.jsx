import { useState } from "react";
import "./App.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});
  const [personalInfo, setpersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [paymentOffer, setPaymentOffer] = useState({
    plan: "Arcade",
    time: "monthly",
    Deal: "$9/mo",
  });
  const [addOns, setAddOns] = useState([]);

  const handleClick = () => {
    if (step === 1) {
      let newError = {};
      if (!personalInfo.name.trim()) newError.name = "This field is required";
      if (!personalInfo.email.includes("@"))
        newError.email = "This field is required";
      if (!personalInfo.phone.trim()) newError.phone = "This field is required";
      setError(newError);

      const valid = Object.keys(newError).length === 0;

      if (valid) {
        setFormData((prev) => ({
          ...prev,
          personalInfo,
        }));
        setStep(2);
      }
    }

    if (step === 2) {
      setFormData((prev) => ({
        ...prev,
        paymentOffer,
      }));
      setStep(3);
    }

    if (step === 3) {
      setFormData((prev) => ({
        ...prev,
        addOns,
      }));
      setStep(4);
    }

    if (step === 4) {
      setStep(5);
    }
  };

  return (
    <>
      <div className="md:flex md:h-dvh justify-center items-center md:bg-blue-100">
        <div className=" bg-[url(./assets/bg-sidebar-mobile.svg)] bg-no-repeat bg-contain md:bg-none md:rounded-xl  md:p-4  bg-blue-100 md:bg-white h-dvh md:h-fit  md:drop-shadow-2xl   md:flex ">
          <div className="md:bg-[url(./assets/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover md:rounded-xl flex justify-center gap-4 md:w-60  pt-7 md:flex-col md:justify-start ">
            <div className=" flex items-center gap-4 md:px-5">
              <span
                className={`${
                  step === 1 ? "bg-sky-200 text-black" : "text-white"
                } stepsButton `}
              >
                1
              </span>
              <div className="hidden md:block text-[#d2d6ff] ">
                <p className="text-sm">STEP 1</p>
                <h2 className="font-bold">YOUR INFO</h2>
              </div>
            </div>
            <div className=" flex items-center gap-4 md:px-5">
              <span
                className={`${
                  step === 2 ? "bg-sky-200 text-black" : "text-white"
                } stepsButton `}
              >
                2
              </span>
              <div className="hidden md:block text-[#d2d6ff] ">
                <p className="text-sm">STEP 2</p>
                <h2 className="font-bold">SELECT PLAN</h2>
              </div>
            </div>
            <div className=" flex items-center gap-4 md:px-5">
              <span
                className={`${
                  step === 3 ? "bg-sky-200 text-black" : "text-white"
                } stepsButton `}
              >
                3
              </span>
              <div className="hidden md:block text-[#d2d6ff] ">
                <p className="text-sm">STEP 3</p>
                <h2 className="font-bold">ADD-ONS</h2>
              </div>
            </div>
            <div className=" flex items-center gap-4 md:px-5">
              <span
                className={`${
                  step >= 4 ? "bg-sky-200 text-black" : "text-white"
                } stepsButton `}
              >
                4
              </span>
              <div className="hidden md:block text-[#d2d6ff] ">
                <p className="text-sm">STEP 4</p>
                <h2 className="font-bold">SUMMARY</h2>
              </div>
            </div>
          </div>
          <form className="md:px-8">
            <div className=" bg-white mx-3 mt-8 md:h-100 md:w-110 md:flex flex-col  p-5 rounded-2xl md:rounded-none shadow-2xl md:shadow-none ">
              <div>
                {step === 1 && (
                  <Step1
                    personalInfo={personalInfo}
                    setpersonalInfo={setpersonalInfo}
                    error={error}
                  />
                )}
              </div>
              <div>
                {step === 2 && (
                  <Step2
                    paymentOffer={paymentOffer}
                    setPaymentOffer={setPaymentOffer}
                  />
                )}
              </div>
              <div>
                {step === 3 && (
                  <Step3
                    addOns={addOns}
                    setAddOns={setAddOns}
                    time={formData.paymentOffer.time}
                  />
                )}
              </div>
              <div>{step === 4 && <Step4 formData={formData} />}</div>
              <div>{step === 5 && <Step5 />}</div>
            </div>
            <div className={`${step === 5 ? "hidden" : "block"}`}>
              <div
                className={`${
                  step === 1 ? "justify-end" : "justify-between"
                } text-sm text-gray-400 bg-white p-4 h-fit  w-full absolute md:relative bottom-0  left-0  flex`}
              >
                <button
                  type="button"
                  className={`${
                    step == 1 && "hidden"
                  } duration-500 hover:text-black`}
                  onClick={() => setStep((prev) => prev - 1)}
                >
                  Go Back
                </button>
                <button
                  onClick={handleClick}
                  type={"button"}
                  className={` duration-500 rounded text-white ${
                    step === 4
                      ? "bg-[#6121ea] px-4 py-2 hover:bg-purple-400"
                      : "bg-blue-950 hover:bg-blue-900 py-2 px-3 "
                  }`}
                >
                  {step === 4 ? "Confirm" : "Next Step"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
