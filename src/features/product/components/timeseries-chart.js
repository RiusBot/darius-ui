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
    title: {
      display: true,
      text: 'Rose Backtest Complete Line Chart',
    },
  },
  scales: {
    y: {
        ticks: {
          beginAtZero: false,
          callback(value) {
            return `${value*100}%`;
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
  
  const lineOptions = {
    onClick: (e, element) => {
      if (element.length > 0) {
        var ind = element[0]._index;
        alert(ind);
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          // stacked: true,
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true,
            // Return an empty string to draw the tick line but hide the tick label
            // Return `null` or `undefined` to hide the tick line entirely
            userCallback(value) {
              // Convert the number to a string and splite the string every 3 charaters from the end
              value = value.toString();
              value = value.split(/(?=(?:...)*$)/);
  
              // Convert the array to a string and format the output
              value = value.join(".");
              return `Rp.${value}`;
            }
          }
        }
      ]
    },
  };
  return <Line options={options} data={chartData} />;
}