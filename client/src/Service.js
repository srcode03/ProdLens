import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./Service.css";
import { Bar } from "react-chartjs-2";
import Navbar from "./Navbar";
import Progress from "react-progressbar";
import ProgressBar from "@ramonak/react-progress-bar";
import { StepContext } from "./context/StepContext";
import ClaimForm from "./ClaimForm";
import Prod from "./Prod";
import Area from "./Area";
function Service() {
  const initialCards = [
    { title: "Lease Deed", category: "Contracts" },
    { title: "Rent Agreement", category: "Important" },
    { title: "Allowance", category: "Important" },
    { title: "Allowance", category: "Important" },
    { title: "Maintainance", category: "Contracts" },
    { title: "Acceptance", category: "New" },
    // Add more card data here
  ];
  const [key, showkey] = useState(false);
  // Replace this with the actual completed tasks value
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const context = useContext(StepContext);
  const [context1, setcontext1] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [duration, setduration] = useState("");
  const [no, setno] = useState("");
  const [revenue, setrevenue] = useState("");
  const handledurationChange = (e) => {
    setduration(e.target.value);
  };

  // Handle password input change
  const handleno = (e) => {
    setno(e.target.value);
  };

  // Handle confirm password input change
  const handlerevenue = (e) => {
    setrevenue(e.target.value);
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = Array.from(
    new Set(initialCards.map((card) => card.category))
  );
  const [showForm, setShowForm] = useState(false); // State variable to control form display
  const [pred, showpred] = useState(false);
  const filteredCards = selectedCategory
    ? initialCards.filter((card) => card.category === selectedCategory)
    : initialCards;

  const handleFilter = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    context.setStep1(true);
    context.setStep2(false);
    context.setStep3(false);
    context.setStep4(false);
    showpred(false);
    setShowForm(true);
    showkey(false);
  }, []);

  const handleClick = () => {
    context.setStep1(true);
    context.setStep2(false);
    context.setStep3(false);
    setShowForm(true);
    showpred(false);
    showkey(false); // Show the form when "Select Legal Document" is clicked
  };
  const handleClick2 = () => {
    context.setStep1(false);
    context.setStep2(true);
    context.setStep3(false);
    setShowForm(false);
    showpred(true);
    showkey(false);
  };
  const handleClick3 = () => {
    context.setStep1(false);
    context.setStep2(false);
    context.setStep3(true);
    setShowForm(false);
    showpred(false);
    showkey(true);
  };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  return (
    <div className="outer">
      <div className="absolute inset-0 overflow-hidden h-full">
        {/* Original video background */}
        <video
          autoPlay
          loop
          muted
          className="h-screen w-screen object-cover object-center fixed top-0 left-0 z-0"
          style={{ zIndex: -1 }}
        >
          <source
            src="https://res.cloudinary.com/dyxnmjtrg/video/upload/v1694668584/Purple_Blue_Modern_Tech_Business_Conference_Video_d5vf0l.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="serve w-full">
        <div className="cards mx-auto">
          <div className="cards mx-auto">
            <div className="my-7 flex justify-center">
              <ul className="steps">
                <li
                  className={`step ${
                    context.step1 ? "step-success" : ""
                  } text-white font-semibold`}
                  onClick={handleClick}
                >
                  Select Legal Document
                </li>
                <li
                  className={`step  ${
                    context.step2 ? "step-success" : ""
                  } text-white font-semibold`}
                  style={{ color: "white" }}
                  onClick={handleClick2}
                >
                  Results
                </li>
                <li
                  className={`step  ${
                    context.step3 ? "step-success" : ""
                  } text-white font-semibold`}
                  style={{ color: "white" }}
                  onClick={handleClick3}
                >
                  Key areas to improve upon
                </li>
              </ul>
            </div>
          </div>
          {showForm && (
            <>
              <ClaimForm />
              <div className="or-text">
                <strong
                  style={{
                    fontSize: "24px",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  Or
                </strong>
              </div>
              <form className="mt-8 space-y-6">
                <div className="rounded-md shadow-lg bg-white p-6">
                  {/* Email Input */}
                  <div className="mb-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Revenue generated
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={revenue}
                      onChange={handlerevenue}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="10,0000"
                    />
                  </div>
                  {/* Password Input */}
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      No of employees
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={no}
                      onChange={handleno}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="10000"
                    />
                  </div>
                  {/* Confirm Password Input */}
                  <div className="mb-4">
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Duration
                    </label>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      autoComplete="current-password"
                      value={duration}
                      onChange={handledurationChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="3 years"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          )}

          {pred && <Prod />}
          {key && <Area />}
        </div>
      </div>
    </div>
  );
}

export default Service;
