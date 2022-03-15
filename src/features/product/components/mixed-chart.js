import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const MixedChart = (props) => {
  const { data } = props;
  const [chartData, setChartData] = React.useState({labels:[], datasets: []});
  React.useEffect(() => {
    if (data === undefined || data.length === 0){ 
      return;
    } else {
      const labels = data.map(item => item.date);
      setChartData( {
        labels,
        datasets: [
          {
            type: 'line',
            label: 'Total Profit (%)',
            borderColor: 'rgb(21, 67, 96, 0.8)',
            fill: false,
            data: data.map(item => item.result.profit_total * 100),
            borderWidth: 3,
          },
          {
            type: 'bar',
            label: 'Wins',
            backgroundColor: 'rgb(75, 192, 192, 0.7)',
            data: data.map(item => item.result.wins),
          },
          {
            type: 'bar',
            label: 'Losses',
            backgroundColor: 'rgb(226, 110, 90, 0.5)',
            data: data.map(item => - item.result.losses),
          },
        ],
      });
    }
  }, [data]);
 
  return <Bar data={chartData} />;
}
