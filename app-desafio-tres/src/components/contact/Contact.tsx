import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, TypeOf } from "zod";
import Information from "./Information";

const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be longer than 2 characters" })
    .regex(/^[^\d]+$/, { message: "Name must not contain numbers" }),
  email: z
    .string()
    .email({
      message: "Invalid email format. Try something like: name@gmail.com",
    }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(200, { message: "Message cannot exceed 200 characters" }),
});

type ContactFormData = TypeOf<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data, event) => {
    event?.preventDefault();
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <main className="font-poppins mb-14">
      <div className="flex flex-col m-auto mt-28 mb-28 items-center w-2/5">
        <h1 className="font-semibold text-3xl">Get In Touch With Us</h1>
        <p className="text-center text-gray text-sm">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex justify-between ml-64 mr-28">
        <div className="flex flex-col w-56">
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

        <form
          className="flex flex-col w-3/5"
          onSubmit={handleSubmit((data, event) => onSubmit(data, event))}
        >
          <div>
            <p className="mb-3">Your name</p>
            <input
              type="text"
              placeholder="Abc"
              className={`w-3/4 h-14 p-5 border rounded-lg border-gray focus:outline-none focus:border-primary ${
                errors.name ? "border-red-500" : ""
              }`}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <p className="mb-3 mt-6 font-medium">Email address</p>
            <input
              type="email"
              placeholder="Abc@def.com"
              className={`w-3/4 h-14 p-5 border rounded-lg border-gray focus:outline-none focus:border-primary ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <p className="mb-3 mt-6 font-medium">Subject</p>
            <input
              type="text"
              placeholder="This is an optional"
              className="w-3/4 h-14 p-5 border rounded-lg border-gray focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <p className="mb-3 mt-6 font-medium">Message</p>
            <textarea
              placeholder="Hi! i’d like to ask about"
              className={`decoration-none w-3/4 h-28 p-5 rounded-lg border border-gray focus:outline-none focus:border-primary ${
                errors.message ? "border-red-500" : ""
              }`}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="flex justify-center items-center w-1/3 bg-primary pl-10 pr-10 pt-3 pb-3 mt-14 text-white font-poppins rounded transition hover:opacity-75"
          >
            Submit
          </button>
          {isSubmitted && (
            <p className="text-primary mt-2">Form submitted successfully!</p>
          )}
        </form>
      </div>
    </main>
  );
};

export default Contact;
