// IncomeForm.js

import React from 'react';
import "./IncomeForm.css";

const IncomeForm = () => {
    return (
        <form className="income-form">
            <label htmlFor="net-income">Net Income Yearly</label>
            <input type="text" id="net-income" name="net-income" />

            <label htmlFor="monthly-expenses">Monthly Expenses</label>
            <input type="text" id="monthly-expenses" name="monthly-expenses" />

            <label htmlFor="saving-strategy">Saving Strategy Plan</label>
            <select id="saving-strategy" name="saving-strategy">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>

            <input type="submit" value="Submit" />
        </form>
    );
};

export default IncomeForm;


