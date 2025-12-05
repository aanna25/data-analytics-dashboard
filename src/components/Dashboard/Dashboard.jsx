import { useState, useEffect } from 'react';
import { fetchUsers, fetchPosts, fetchComments, fetchTodos } from '../../services/api';
import { calculateAllMetrics } from '../../utils/dataProcessing';
import Loader from "../Loader/Loader.jsx";
import MetricsCard from "../MetricsCard/MetricsCard.jsx";
import TodosChart from "../Charts/TodosChart/TodosChart.jsx";
import UserActivityChart from "../Charts/UserActivityChart/UserActivityChart.jsx";
import DataTable from "../DataTable/DataTable.jsx";

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
        
        const processedData = calculateAllMetrics(users, posts, comments, todos);
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

  return (
    <div className="dashboard-container">
      <MetricsCard 
        title="Users Posts" 
        value={data.metrics.avgPostsPerUser} 
      />
      <TodosChart data={data.charts.todos} />
      <UserActivityChart data={data.charts.activity} />
      <DataTable
        title="Top 5 najbardziej komentowanych postów."
        data={data.metrics.top5CommentedPosts}
      />
    </div>
  );
};

export default Dashboard;
