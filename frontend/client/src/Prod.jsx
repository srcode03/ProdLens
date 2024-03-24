import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Prod() {
  const totalTasks = 1000;
  const completedTasks = 850;
  const taskBreakdown = [
    { name: "Construction", value: 350 },
    { name: "Planning", value: 200 },
    { name: "Procurement", value: 150 },
    { name: "Quality Control", value: 100 },
    { name: "Safety", value: 50 },
  ];
  const totalEmployees = 500;
  const employeeBreakdown = [
    { name: "Construction Workers", value: 250 },
    { name: "Managers", value: 80 },
    { name: "Engineers", value: 70 },
    { name: "Support Staff", value: 100 },
  ];
  const projectsCompleted = 15;
  const projectsOngoing = 8;

  const data = [
    { name: "Completed Tasks", value: completedTasks },
    { name: "Remaining Tasks", value: totalTasks - completedTasks },
  ];

  const COLORS = ["#00C851", "#ff4444"];

  return (
    <div className="report-container">
      <h1 className="report-title">Company-wide Productivity Reports</h1>
      <h2 className="report-subtitle">Overall Productivity</h2>

      <div className="data-container">
        <p>
          <span className="label">Expected Total Tasks:</span> {totalTasks}
        </p>
        <p>
          <span className="label">Expected Completed Tasks:</span> {completedTasks}
        </p>
        <p>
          <span className="label">Required no of extra Employees:</span> {totalEmployees}
        </p>
        <p>
          <span className="label">Expected Projects Completed:</span> {projectsCompleted}
        </p>
        <p>
          <span className="label">Expected Projects Ongoing:</span> {projectsOngoing}
        </p>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="rate-container">
        <p className="completion-rate">
          Overall Productivity Rate:{" "}
          <span>{(completedTasks*100 / totalTasks).toFixed(2)}%</span>
        </p>
      </div>

      <h2 className="report-subtitle">Required Task Breakdown</h2>
      <div className="bar-chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={taskBreakdown}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h2 className="report-subtitle">Required Employee Breakdown</h2>
      <div className="bar-chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={employeeBreakdown}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#ff6347" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <style jsx>{`
        .report-container {
          background-color: #f0f0f0;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: 0 auto;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .report-title {
          color: #333333;
          font-size: 32px;
          margin-bottom: 20px;
          border-bottom: 2px solid #cccccc;
          padding-bottom: 10px;
          text-align: center;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .report-subtitle {
          color: #555555;
          font-size: 24px;
          margin-bottom: 30px;
          font-weight: normal;
          text-align: center;
        }

        .data-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .data-container p {
          margin: 10px 20px;
          color: #777777;
          font-size: 18px;
        }

        .label {
          font-weight: bold;
          color: #333333;
        }

        .chart-container {
          margin-bottom: 30px;
        }

        .rate-container {
          text-align: center;
        }

        .completion-rate {
          color: #007bff;
          font-size: 24px;
          font-weight: bold;
        }

        .completion-rate span {
          color: #00c851;
          font-size: 36px;
        }

        .bar-chart-container {
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
}
