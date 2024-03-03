// IncomeForm.js

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./IncomeForm.css";

const IncomeForm = () => {
  const [formData, setFormData] = useState({ netIncome: '', monthlyExpenses: '', savingStrategy: 'option1' });
  const [chartData, setChartData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...formData };
    setChartData([...chartData, newData]);
    setFormData({ netIncome: '', monthlyExpenses: '', savingStrategy: 'option1' });
  };

  return (
    <div>
      <form className="income-form" onSubmit={handleSubmit}>
        <label htmlFor="net-income">Net Income Yearly</label>
        <input type="text" id="net-income" name="netIncome" value={formData.netIncome} onChange={handleInputChange} />

        <label htmlFor="monthly-expenses">Monthly Expenses</label>
        <input type="text" id="monthly-expenses" name="monthlyExpenses" value={formData.monthlyExpenses} onChange={handleInputChange} />

        <label htmlFor="saving-strategy">Saving Strategy Plan</label>
        <select id="saving-strategy" name="savingStrategy" value={formData.savingStrategy} onChange={handleInputChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
      
      <LineChart width={600} height={300} data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="netIncome" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="monthlyExpenses" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default IncomeForm;
