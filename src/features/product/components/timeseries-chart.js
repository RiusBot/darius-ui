import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  },
  scales: {
    y: {
        ticks: {
          beginAtZero: false,
          callback(value) {
            var valueStr = `${value*100}`.split(".")[0];
            return `${valueStr}%`;
          }
        }
      }
  }
};

export const TimeseriesChart = (props) => {
  const { data } = props;
  const [chartData, setChartData] = React.useState({labels:[], datasets: []});
  React.useEffect(() => {
    if (data.length === 0){ 
      return;
    } else {
      const labels = data.map((row, id) => {return (id%3 == 0)? row.date.split(" ")[0] : ""});
      const startValue = parseInt(data[0].balance);
      setChartData( {
        labels,
        datasets: [
          {
            label: 'Complete',
            data: data.map((row) => {return parseInt(row.balance)/startValue}),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ]
      });
    }
  }, [data]);
 
  return <Line options={options} data={chartData} />;
}