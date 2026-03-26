"use client";
import "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { sourceData } from "./sourceData";

export default function ChartJs() {
  return (
    <section>
      <h1 className="text-4xl text-black">Chart JS Practice</h1>

      <div className="w-full grid grid-cols-2 grid-rows-1 p-10 gap-10">
        {/* chart1 */}
        <div className="bg-slate-100 shadow-2xl rounded-xl col-span-2 w-full h-100 p-10">
          <div>Chart 1</div>
          <Line
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: sourceData.map((data) => data.revenue),
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  borderColor: "rgba(255, 99, 132, 1)",
                },
                {
                  label: "Cost",
                  data: sourceData.map((data) => data.cost),
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "rgba(54, 162, 235, 1)",
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: "Monthly Revenue and Cost",
                  font: {
                    size: 24,
                  },
                },
              },
              animation: {
                duration: 1000,
                easing: "easeInOutQuart",
                loop: false,
              },
            }}
          />
        </div>

        <div className="bg-slate-300 rounded-xl w-full h-100 col-span-1 p-10">
          <div>Chart 2</div>

          <Bar
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: sourceData.map((data) => data.revenue),
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  borderColor: "rgba(255, 99, 132, 1)",
                },
                {
                  label: "Cost",
                  data: sourceData.map((data) => data.cost),
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "rgba(54, 162, 235, 1)",
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  text: "Revenue and Cost Sources",
                  display: true,
                  font: {
                    size: 24,
                  },
                },
              },
              animation: {
                duration: 1000,
                easing: "easeInOutQuart",
              },
            }}
          />
        </div>

        <div className="bg-slate-300 rounded-xl w-full h-100 col-span-1 p-10">
          <div>Chart 3</div>
          <Doughnut
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: sourceData.map((data) => data.revenue),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: "Revenue n Cost",
                  font: {
                    size: 24,
                  },
                },
              },
              animation: {
                duration: 1000,
                easing: "easeInOutQuart",
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
