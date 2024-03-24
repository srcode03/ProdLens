import React, { useState } from "react";

export default function Area() {
  const [showSkillDevelopment, setShowSkillDevelopment] = useState(false);
  const [showProjectPlanning, setShowProjectPlanning] = useState(false);
  const [showSiteLogistics, setShowSiteLogistics] = useState(false);
  const [showCommunication, setShowCommunication] = useState(false);
  const [showLeanPrinciples, setShowLeanPrinciples] = useState(false);
  const [showToolsEquipment, setShowToolsEquipment] = useState(false);
  const [showWorkEnvironment, setShowWorkEnvironment] = useState(false);

  const toggleDropdown = (setDropdownState) => {
    setDropdownState((prevState) => !prevState);
  };

  return (
    <div className="container">
      <h1 className="heading">Key Areas to Improve Labor Productivity</h1>
      <div className="area-container">
        <div
          className={`area-item ${showSkillDevelopment ? "open" : ""}`}
          onClick={() => toggleDropdown(setShowSkillDevelopment)}
        >
          <h3 className="area-title">Skill Development and Training</h3>
          <div className={`area-content ${showSkillDevelopment ? "open" : ""}`}>
            <p>
              Provide regular training programs to enhance the skills and
              knowledge of your labor force. This can include technical
              training, safety training, and soft skills development.
            </p>
          </div>
        </div>
        <div
          className={`area-item ${showProjectPlanning ? "open" : ""}`}
          onClick={() => toggleDropdown(setShowProjectPlanning)}
        >
          <h3 className="area-title">
            Efficient Project Planning and Scheduling
          </h3>
          <div className={`area-content ${showProjectPlanning ? "open" : ""}`}>
            <p>
              Implement robust project planning and scheduling practices to
              ensure efficient utilization of labor resources. Use project
              management tools and techniques to optimize workflows and minimize
              downtime.
            </p>
          </div>
        </div>
        <div
          className={`area-item ${showSiteLogistics ? "open" : ""}`}
          onClick={() => toggleDropdown(setShowSiteLogistics)}
        >
          <h3 className="area-title">
            Improve Site Logistics and Material Management
          </h3>
          <div className={`area-content ${showSiteLogistics ? "open" : ""}`}>
            <p>
              Streamline site logistics and material management to reduce wait
              times and improve accessibility to tools and materials. Proper
              planning and coordination can minimize delays and increase
              productivity.
            </p>
          </div>
        </div>
        <div
          className={`area-item ${showCommunication ? "open" : ""}`}
          onClick={() => toggleDropdown(setShowCommunication)}
        >
          <h3 className="area-title">Enhance Communication and Coordination</h3>
          <div className={`area-content ${showCommunication ? "open" : ""}`}>
            <p>
              Foster effective communication and coordination among teams and
              stakeholders. Clear communication channels and collaborative
              practices can reduce misunderstandings and rework, leading to
              higher productivity.
            </p>
          </div>
        </div>
        <div
          className={`area-item ${showLeanPrinciples ? "open" : ""}`}
          onClick={() => toggleDropdown(setShowLeanPrinciples)}
        >
          <h3 className="area-title">Implement Lean Construction Principles</h3>
          <div className={`area-content ${showLeanPrinciples ? "open" : ""}`}>
            <p>
              Adopt lean construction principles to eliminate waste, streamline
              processes, and improve workflow. Techniques like value stream
              mapping, just-in-time delivery, and continuous improvement can
              boost productivity.
            </p>
          </div>
        </div>
        <div
          className={`area-item ${showToolsEquipment ? "open" : ""}`}
          onClick={() => toggleDropdown(setShowToolsEquipment)}
        >
          <h3 className="area-title">
            Invest in Appropriate Tools and Equipment
          </h3>
          <div className={`area-content ${showToolsEquipment ? "open" : ""}`}>
            <p>
              Provide your labor force with the right tools and equipment for
              the job. Investing in modern, well-maintained equipment can
              increase efficiency and productivity on the job site.
            </p>
          </div>
        </div>
        <div
          className={`area-item ${showWorkEnvironment ? "open" : ""}`}
          onClick={() => toggleDropdown(setShowWorkEnvironment)}
        >
          <h3 className="area-title">Promote a Positive Work Environment</h3>
          <div className={`area-content ${showWorkEnvironment ? "open" : ""}`}>
            <p>
              Foster a positive work environment that promotes employee
              satisfaction, motivation, and engagement. Factors like fair
              compensation, recognition, and work-life balance can contribute to
              higher productivity.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f7f7f7;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        .heading {
          text-align: center;
          color: #333;
          font-size: 36px;
          margin-bottom: 40px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .area-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 40px;
        }

        .area-item {
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .area-item.open {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          transform: translateY(-5px);
        }

        .area-title {
          color: #333;
          font-size: 24px;
          margin-top: 0;
          margin-bottom: 20px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .area-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
        }

        .area-content.open {
          max-height: 500px; /* Adjust this value based on your content height */
        }

        .area-content p {
          color: #555;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}
