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
              <form
                style={{
                  maxWidth: "500px",
                  margin: "0 auto",
                  background: "#ffffff",
                  padding: "30px",
                  borderRadius: "10px",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e5e5e5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "24px",
                    marginBottom: "20px",
                    color: "#333333",
                  }}
                >
                  Fill in the Details
                </h2>
                <div
                  className="form-group"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label
                    htmlFor="exampleInputEmail1"
                    style={{ marginBottom: "5px", color: "#555555" }}
                  >
                    Total No of Current Employees
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #cccccc",
                    }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ marginBottom: "5px", color: "#555555" }}
                  >
                    Duration of Business
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #cccccc",
                    }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ marginBottom: "5px", color: "#555555" }}
                  >
                    Revenue Generated:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #cccccc",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    border: "none",
                  }}
                >
                  Submit
                </button>
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
