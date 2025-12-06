import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import s from "./UserActivityChart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserActivityChart = ({ data }) => {
  const labels = data.map((item) => item.username);
  const postCounts = data.map((item) => item.postsCount);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Number of posts",
        data: postCounts,
        backgroundColor: "rgba(208, 232, 144, 0.8)",
        borderColor: "#D0E890",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    color: "#FFFFFF",

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "User activity (number of posts)",
        color: "#FFFFFF",
        font: { size: 16 },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "User name",
          color: "#FFFFFF",
        },
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          color: "rgba(68, 68, 68, 0.5)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of posts",
          color: "#FFFFFF",
        },
        ticks: {
          color: "#FFFFFF",
          // stepSize: 2,
        },
        grid: {
          color: "rgba(68, 68, 68, 0.5)",
        },
      },
    },
  };

  return (
    <div className={s.wrapper}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default UserActivityChart;
