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
import { Line } from 'react-chartjs-2';
import { format, fromUnixTime } from 'date-fns';


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

export const BotChart = (props) => {
  const { data } = props;
  const [chartData, setChartData] = React.useState({labels:[], datasets: []});
  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14
          }
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const balance = context.parsed.y.toFixed(1);
            const roi = (balance - context.dataset.data[0]) / context.dataset.data[0] * 100;
            return balance + '  ' + roi.toFixed(2) + '%';
          },
        }
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
          ticks: {
            font: {
              size: 10
            }
          }
        }
    },
  }

  React.useEffect(() => {
    if (data === undefined || data.length === 0 || data.total_page == 0){ 
      return;
    } else {
      const concatPages = Array.from({length: data.total_page}, (x, i) => i).map(x => data[x]).flat(1).filter(x => x);
      const filterData = concatPages.filter(trade => trade.balance).reverse();
      if (filterData.length == 0)
        return;
      const date = filterData.map(trade => new Date(trade.message.message_timestamp));
      const labels = date.map(date => format(fromUnixTime(date), 'yyyy-MM-dd'));
      const roi = ((filterData[filterData.length-1].balance - filterData[0].balance) / filterData[0].balance * 100).toFixed(2);

      setChartData( {
        labels,
        datasets: [
          {
            type: 'line',
            label: roi > 0 ? 'Balance +' + roi + '%' : 'Balance ' + roi + '%',
            borderColor: 'rgb(21, 67, 96, 0.8)',
            fill: false,
            data: filterData.map(trade => trade.balance),
            borderWidth: 3,
            pointRadius: 1
          },
        ],
      });
    }
  }, [data]);
    
  if (chartData.labels.length == 0)
    return (<></>);

  return <Line data={chartData} options={options} />;
}
