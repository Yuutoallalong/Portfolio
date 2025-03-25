import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "../assets/styles/dashboard.css";
import { motion } from "framer-motion";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  interface AnalyticsData {
    _id: string;
    views: number;
  }

  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);

  useEffect(() => {
    fetch("/api/analytics")
      .then((response) => response.json())
      .then((data: AnalyticsData[]) => setAnalyticsData(data))
      .catch((error) => console.error("Error fetching analytics data:", error));
  }, []);

  const chartData = {
    labels: analyticsData.map((data) => data._id),
    datasets: [
      {
        label: "Page Views",
        data: analyticsData.map((data) => data.views),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h2 className="dashboard-heading">Visitor Analytics</h2>
        <Bar data={chartData} />
      </div>
    </motion.div>
  );
}
