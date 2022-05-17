import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';


export default function FundDistributionPieChart({data}) {
  const COLORS = ['#3e3e3e','grey', 'silver', 'silver'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{width:"fit-content", padding:"5px 15px"}}>
          <p className="desc" style={{color:"black"}}>%{payload[0].payload.ratio}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        dataKey="ratio"
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
        label = {(entry) => entry.name}
      >
        {data.map((entry, index)=> {
          return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        })}
      </Pie>
      <Tooltip content={CustomTooltip} />
    </PieChart>
  </ResponsiveContainer>
  )
}
