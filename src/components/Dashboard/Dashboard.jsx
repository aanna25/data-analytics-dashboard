import { useState, useEffect } from "react";
import {
  fetchUsers,
  fetchPosts,
  fetchComments,
  fetchTodos,
} from "../../services/api";
import { calculateAllMetrics } from "../../utils/dataProcessing";
import Loader from "../Loader/Loader.jsx";
import MetricsCard from "../MetricsCard/MetricsCard.jsx";
import TodosChart from "../Charts/TodosChart/TodosChart.jsx";
import UserActivityChart from "../Charts/UserActivityChart/UserActivityChart.jsx";
import DataTable from "../DataTable/DataTable.jsx";
import s from "./Dashboard.module.css";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [users, posts, comments, todos] = await Promise.all([
          fetchUsers(),
          fetchPosts(),
          fetchComments(),
          fetchTodos(),
        ]);

        const processedData = calculateAllMetrics(
          users,
          posts,
          comments,
          todos
        );
        setData(processedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <Loader />;
  if (error || !data) return <div>Wystąpił błąd podczas ładowania danych</div>;

  const color1 = "#F5BF5B";
  const color2 = "#B180EB";
  const color3 = "#D0E890";

  return (
    <div className={s.dashboardContainer}>
      <div className={s.topRow}>
        <div className={s.welcomeBlock}>
          <h1 className={s.welcomeTitle}>Welcome!</h1>
          <p className={s.welcomeSubtitle}>Good to see you here</p>
        </div>
        <div className={s.metricsGroup}>
          <MetricsCard
            title="Posts / User"
            value={data.metrics.avgPostsPerUser}
            bgColor={color1}
          />
          <MetricsCard
            title="Comments / Post"
            value={data.metrics.avgCommentsPerPost}
            bgColor={color2}
          />
          <MetricsCard
            title="TODOs Completed"
            value={data.metrics.percentageTodos}
            unit="%"
            bgColor={color3}
          />
        </div>
      </div>
      <div className={s.bottomRow}>
        <UserActivityChart data={data.charts.activity} />
        <div className={s.rightColumnStack}>
          <TodosChart data={data.charts.todos} />
          <DataTable
            title="Top 5 commented posts"
            data={data.metrics.top5CommentedPosts}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
