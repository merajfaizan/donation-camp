import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#00C49F", "#FF444A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const [allDonations, setAllDonations] = useState([]);

  // To get local storage data
  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("all-donations"));
    setAllDonations(storedDonations || []);
  }, []);

  // Calculate the completed and remaining donation slots
  const completedDonations = allDonations.length;
  const remainingDonations = 12 - completedDonations;

  // Data for the pie chart
  const data = [
    { name: "Your Donations", value: completedDonations },
    { name: "Total Donations", value: remainingDonations },
  ];

  return (
    <section>
      <div className="flex justify-center items-center w-full h-[500px]">
        <PieChart width={400} height={400}>
          <Pie
          
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
              className="w-[500px] h-[500px]"
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend  />
        </PieChart>
      </div>
    </section>
  );
};

export default Statistics;
