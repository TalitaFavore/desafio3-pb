import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, TypeOf } from "zod";
import axios from "axios";

const billingSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  companyName: z.string().optional(),
  zipCode: z
    .string()
    .min(8, { message: "ZIP code must be exactly 8 characters" })
    .max(8, { message: "ZIP code must be exactly 8 characters" }),
  country: z.string().min(1, { message: "Country is required" }),
  streetAddress: z.string().min(1, { message: "Street Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  province: z.string().min(1, { message: "Province is required" }),
  addOnAddress: z.string().optional(),
  email: z.string().email({ message: "Invalid email format" }),
  additionalInfo: z.string().optional(),
});

type BillingFormData = TypeOf<typeof billingSchema>;

const BillingForm = () => {
  const [selectedOption, setSelectedOption] = useState("directBankTransfer");
  const [formData, setFormData] = useState<BillingFormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    zipCode: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    addOnAddress: "",
    email: "",
    additionalInfo: "",
  });

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<BillingFormData>({
    resolver: zodResolver(billingSchema),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setValue(name as keyof BillingFormData, value);
  };

  const handleZipCodeChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const zipCode = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      zipCode,
    }));
    setValue("zipCode", zipCode);

    if (zipCode.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${zipCode}/json/`
        );
        const { logradouro, localidade, uf } = response.data;
        setFormData((prevData) => ({
          ...prevData,
          zipCode,
          streetAddress: logradouro,
          city: localidade,
          province: uf,
        }));
        setValue("streetAddress", logradouro);
        setValue("city", localidade);
        setValue("province", uf);
      } catch (error) {
        console.error("Error fetching address data:", error);
      }
    }
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const onSubmit = (data: BillingFormData) => {
    console.log("Form data submitted:", data);
  };

  return (
    <div className="flex flex-row m-28 mt-20 gap-28">
      <div className="flex flex-col font-poppins font-semibold p-4 w-1/2">
        <h1 className="text-3xl mb-4">Billing details</h1>
        <form className="font-medium" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-4 mb-4">
            <div className="w-1/2">
              <p className="mb-2 mt-2">First Name</p>
              <input
                type="text"
                {...register("firstName")}
                value={formData.firstName}
                onChange={handleInputChange}
                onBlur={() => trigger("firstName")}
                className={`border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>

            <div className="w-1/2">
              <p className="mb-2 mt-2">Last Name</p>
              <input
                type="text"
                {...register("lastName")}
                value={formData.lastName}
                onChange={handleInputChange}
                onBlur={() => trigger("lastName")}
                className={`border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-2 mt-2">Company Name (Optional)</p>
            <input
              type="text"
              {...register("companyName")}
              value={formData.companyName}
              onChange={handleInputChange}
              onBlur={() => trigger("companyName")}
              className="border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2"
            />
          </div>

          <div className="mb-4">
            <p className="mb-2 mt-2">ZIP code</p>
            <input
              type="text"
              {...register("zipCode")}
              value={formData.zipCode}
              onChange={handleZipCodeChange}
              onBlur={() => trigger("zipCode")}
              className={`border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2 ${
                errors.zipCode ? "border-red-500" : ""
              }`}
            />
            {errors.zipCode && (
              <p className="text-red-500">{errors.zipCode.message}</p>
            )}
          </div>

          <div className="mb-4">
            <p className="mb-2 mt-2">Country / Region</p>
            <input
              type="text"
              {...register("country")}
              value={formData.country}
              onChange={handleInputChange}
              onBlur={() => trigger("country")}
              className={`border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2 ${
                errors.country ? "border-red-500" : ""
              }`}
            />
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>

          <div className="mb-4">
            <p className="mb-2 mt-2">Street address</p>
            <input
              type="text"
              {...register("streetAddress")}
              value={formData.streetAddress}
              onChange={handleInputChange}
              onBlur={() => trigger("streetAddress")}
              className={`border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2 ${
                errors.streetAddress ? "border-red-500" : ""
              }`}
            />
            {errors.streetAddress && (
              <p className="text-red-500">{errors.streetAddress.message}</p>
            )}
          </div>

          <div className="mb-4">
            <p className="mb-2 mt-2">City</p>
            <input
              type="text"
              {...register("city")}
              value={formData.city}
              onChange={handleInputChange}
              onBlur={() => trigger("city")}
              className={`border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2 ${
                errors.city ? "border-red-500" : ""
              }`}
            />
            {errors.city && (
              <p className="text-red-500">{errors.city.message}</p>
            )}
          </div>

          <div className="mb-4">
            <p className="mb-2 mt-2">Province</p>
            <input
              type="text"
              {...register("province")}
              value={formData.province}
              onChange={handleInputChange}
              onBlur={() => trigger("province")}
              className={`border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2 ${
                errors.province ? "border-red-500" : ""
              }`}
            />
            {errors.province && (
              <p className="text-red-500">{errors.province.message}</p>
            )}
          </div>

          <div className="mb-4">
            <p className="mb-2 mt-2">Add-on address (Optional)</p>
            <input
              type="text"
              {...register("addOnAddress")}
              value={formData.addOnAddress}
              onChange={handleInputChange}
              onBlur={() => trigger("addOnAddress")}
              className="border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2"
            />
          </div>

          <div className="mb-4">
            <p className="mb-2 mt-2">Email</p>
            <input
              type="email"
              {...register("email")}
              value={formData.email}
              onChange={handleInputChange}
              onBlur={() => trigger("email")}
              className={`border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <p className="mb-2 mt-2">Additional information (Optional)</p>
            <input
              type="text"
              {...register("additionalInfo")}
              value={formData.additionalInfo}
              onChange={handleInputChange}
              onBlur={() => trigger("additionalInfo")}
              className="border rounded-lg border-gray focus:outline-none focus:border-primary w-full h-14 px-2"
            />
          </div>
        </form>
      </div>

      <div className="font-poppins flex flex-col mt-14 w-1/2">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between font-medium text-xl">
            <h2>Product</h2>
            <h2>Subtotal</h2>
          </div>
          <div className="flex justify-between text-sm">
            <div className="flex gap-4 ">
              <p className="text-gray">Asgaard sofa</p>
              <p>X</p>
              <p>1</p>
            </div>
            <p className="font-light">Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Subtotal</p>
            <p className="font-light">Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">Total</p>
            <p className="font-bold text-primary text-xl">Rs. 250,000.00</p>
          </div>
        </div>

        <hr className="border-gray8 mt-6 mb-4" />
        <div>
          <div className="flex flex-col gap-5 mb-6">
            <div>
              <label className="flex">
                <input
                  type="radio"
                  value="directBankTransfer"
                  checked={selectedOption === "directBankTransfer"}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <span
                  className={`font-medium ${
                    selectedOption === "directBankTransfer"
                      ? "text-black"
                      : "text-gray"
                  }`}
                >
                  Direct Bank Transfer
                </span>
              </label>
            </div>

            {selectedOption === "directBankTransfer" && (
              <p className="font-light text-justify text-gray mt-1">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}

            <div>
              <label className="flex">
                <input
                  type="radio"
                  value="cashOnDelivery"
                  checked={selectedOption === "cashOnDelivery"}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <span
                  className={`font-medium ${
                    selectedOption === "cashOnDelivery"
                      ? "text-black"
                      : "text-gray"
                  }`}
                >
                  Cash On Delivery
                </span>
              </label>
            </div>

            {selectedOption === "cashOnDelivery" && (
              <p className="font-light text-justify text-gray mt-1">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}
          </div>
          <p className="font-light text-justify">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </div>
        <button
          type="submit"
          className="flex border rounded-lg pl-16 pr-16 pt-2 pb-2 m-auto mt-10"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BillingForm;
