import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BarChart as Chart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarChart({setSelectedFund, data}) {
  const navigate = useNavigate();
  const COLORS = ['#3e3e3e','grey', 'silver', '#d4d4d4'];

  function handleClick(data, index) {
    console.log(data);
    if(setSelectedFund){
      setSelectedFund({code: data.code, name: data.name});
    }
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload.name}</p>
          <p className="intro">{payload[0].payload.code}</p>
          <p className="desc">Getiri: %{payload[0].payload.price}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="95%" height="100%">
    <Chart
      data={data}
      margin={{
        top: 40,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="code" />
      <YAxis />
      <Tooltip content={CustomTooltip} />
      <Bar dataKey="price" fill="#8884d8" onClick={handleClick} className= "bar">
        {data.map((entry, index)=> {
            return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          })}
      </Bar>
    </Chart>
    </ResponsiveContainer>
  )
}
