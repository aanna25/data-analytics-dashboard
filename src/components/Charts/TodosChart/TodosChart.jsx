import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import s from "./TodosChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLOR_YELLOW = "#F5BF5B";
const COLOR_PURPLE = "#B180EB";

const TodosChart = ({ data }) => {
  const chartData = {
    labels: ["Completed", "Uncompleted"],
    datasets: [
      {
        label: "Number of tasks",
        data: [data.completed, data.uncompleted],
        backgroundColor: [COLOR_YELLOW, COLOR_PURPLE],
        borderColor: [COLOR_YELLOW, COLOR_PURPLE],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    
    color: "#FFFFFF",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#FFFFFF",
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Percentage of tasks completed (TODOs)",
        color: "#FFFFFF",
        font: {
          size: 16,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={s.wrapper}>
      <div style={{ height: "100%", width: "100%" }}>
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TodosChart;
