import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = () => {

    const marksArray = [
        {
          "id": 1,
          "name": "Alice",
          "physics": 80,
          "chemistry": 90,
          "math": 75
        },
        {
          "id": 2,
          "name": "Bob",
          "physics": 70,
          "chemistry": 85,
          "math": 90
        },
        {
          "id": 3,
          "name": "Charlie",
          "physics": 85,
          "chemistry": 80,
          "math": 95
        },
        {
          "id": 4,
          "name": "David",
          "physics": 90,
          "chemistry": 75,
          "math": 85
        },
        {
          "id": 5,
          "name": "Eve",
          "physics": 75,
          "chemistry": 90,
          "math": 70
        },
        {
          "id": 6,
          "name": "Frank",
          "physics": 80,
          "chemistry": 75,
          "math": 85
        },
        {
          "id": 7,
          "name": "Grace",
          "physics": 85,
          "chemistry": 80,
          "math": 95
        },
        {
          "id": 8,
          "name": "Henry",
          "physics": 75,
          "chemistry": 90,
          "math": 70
        },
        {
          "id": 9,
          "name": "Isabelle",
          "physics": 90,
          "chemistry": 75,
          "math": 85
        },
        {
          "id": 10,
          "name": "Jack",
          "physics": 80,
          "chemistry": 90,
          "math": 75
        },
        {
          "id": 11,
          "name": "Karen",
          "physics": 70,
          "chemistry": 85,
          "math": 90
        },
        {
          "id": 12,
          "name": "Liam",
          "physics": 85,
          "chemistry": 80,
          "math": 95
        }
      ];
      
    return (
        <div>
            <LineChart width={1000}
                height={300}
                data={marksArray}>
                    <Line dataKey="physics"></Line>
                    <Line stroke="#82ca9d" dataKey="math"></Line>
                    <XAxis dataKey="name" />
                    <YAxis></YAxis>
                    <Tooltip />
                    <Line stroke="#8884d8" dataKey="chemistry"></Line>
                   
                    
                    
                
            </LineChart>
        </div>
    );
};

export default Dashboard;