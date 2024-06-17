import React from "react";

const BillingForm = () => {
  return (
    <div>
      <h1>Billing details</h1>
      <form action="">
        <div>
        <p>First Name</p>
        <input type="text" />
        </div>
        
        <p>Last Name</p>
        <input type="text" />

        <p>Company Name (Optional)</p>
        <input type="text" />

        <p>ZIP code</p>
        <input type="text" />

        <p>Country / Region</p>
        <input type="text" />

        <p>Street address</p>
        <input type="text" />

        <p>Town / City</p>
        <input type="text" />

        <p>Province</p>
        <input type="text" />

        <p>Add-on address</p>
        <input type="text" />

        <p>Email address</p>
        <input type="email" />

        <input type="text" />
      </form>
    </div>
  );
};

export default BillingForm;
