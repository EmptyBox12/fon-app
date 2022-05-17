import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function HomeLineGraph({data}) {

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload.code}</p>
          <p className="intro">{payload[0].payload.name}</p>
          <p className="desc">Fiyat: {payload[0].payload.price}</p>
        </div>
      );
    }
    return null;
  };

  return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={1} angle={0} dy = {10} dx = {-15} />
          <YAxis />
          <Tooltip content={CustomTooltip} />
          <Line type="monotone" dataKey="price" stroke="#8884d8"  />
        </LineChart>
      </ResponsiveContainer>
  )
}
