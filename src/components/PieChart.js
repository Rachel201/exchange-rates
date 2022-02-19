import { PieChart } from 'react-minimal-pie-chart';

export const Chart = () => {

  const labels = [
    ["2G", 97, "#505050"],
    ["3G", 98, "#ff0000"],
    ["4G", 99, "#07b9a2"],
  ];

  const pieChartData = labels.map(value => ({
    title: value[0],
    value: Math.floor((Math.random() * 100) + 1),
    color: value[2]
  }
  ));

  return (
    <div className="Chart">
      <PieChart
        paddingAngle={10}
        labelStyle={{
          fontSize: "5px",
          fill: "#000"
        }}
        labelPosition={63}
        lineWidth={40}
        data={pieChartData}
      />
    </div>
  )
}
