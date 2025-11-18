// src/components/SalesChart.jsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function SalesChart({ data }) {
  const chartData = {
    labels: data.map(d => new Date(d.Date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })),
    datasets: [
      {
        label: 'Predicted Monthly Sales ($)',
        data: data.map(d => d.Predicted_Sales),
        borderColor: 'hsl(210, 100%, 60%)',
        backgroundColor: 'hsla(210, 100%, 60%, 0.2)',
        tension: 0.4,
        fill: true,
        borderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'hsl(210, 100%, 60%)',
        pointBorderColor: 'hsl(220, 20%, 8%)',
        pointBorderWidth: 2,
        pointHoverBackgroundColor: 'hsl(210, 100%, 70%)',
        pointHoverBorderColor: 'hsl(210, 100%, 60%)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'hsl(0, 0%, 95%)',
          font: {
            size: 14,
            family: 'Inter, sans-serif',
            weight: '600'
          },
          padding: 20
        }
      },
      title: {
        display: true,
        text: '12-Month Sales Forecast',
        color: 'hsl(0, 0%, 95%)',
        font: {
          size: 20,
          family: 'Outfit, sans-serif',
          weight: '700'
        },
        padding: 20
      },
      tooltip: {
        backgroundColor: 'hsla(220, 18%, 20%, 0.95)',
        titleColor: 'hsl(0, 0%, 95%)',
        bodyColor: 'hsl(0, 0%, 70%)',
        borderColor: 'hsl(210, 100%, 60%)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return `Sales: $${context.parsed.y.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Sales ($)',
          color: 'hsl(0, 0%, 70%)',
          font: {
            size: 14,
            weight: '600'
          }
        },
        ticks: {
          color: 'hsl(0, 0%, 70%)',
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        },
        grid: {
          color: 'hsla(0, 0%, 100%, 0.05)',
          drawBorder: false
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month',
          color: 'hsl(0, 0%, 70%)',
          font: {
            size: 14,
            weight: '600'
          }
        },
        ticks: {
          color: 'hsl(0, 0%, 70%)'
        },
        grid: {
          color: 'hsla(0, 0%, 100%, 0.05)',
          drawBorder: false
        }
      },
    },
  };

  return <Line data={chartData} options={options} />;
}