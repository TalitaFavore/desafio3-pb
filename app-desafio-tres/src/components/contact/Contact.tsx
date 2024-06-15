import React from "react";
import Information from "./Information";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>Get In Touch With Us</h1>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div>
        <Information
          image="https://pb-desafio3.s3.us-east-2.amazonaws.com/location.svg"
          title="Address"
          information="236 5th SE Avenue, New York NY10000, United States"
        />
        <Information
          image="https://pb-desafio3.s3.us-east-2.amazonaws.com/phone.svg"
          title="Phone"
          information="Mobile: +(84) 546-6789 Hotline: +(84) 456-6789"
        />
        <Information
          image="https://pb-desafio3.s3.us-east-2.amazonaws.com/clock.svg"
          title="Working Time"
          information="Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00"
        />
      </div>

      <div>
        <p>Your name</p>
        <input type="text" placeholder="Abc" />

        <p>Email address</p>
        <input type="email" placeholder="Abc@def.com" />

        <p>Subject</p>
        <input type="text" placeholder="This is an optional" />

        <p>Message</p>
        <textarea name="" placeholder="Hi! i’d like to ask about" />
        
      </div>
    </div>
  );
};

export default Contact;
