import * as yup from "yup";

export const bookingFormValidation = yup.object().shape({
  date: yup.date().nullable().required("Date is required"),
  time: yup.string().required("Time is required"),
  guests: yup
    .number()
    .typeError("Number of guests is required")
    .min(1, "At least one guest")
    .max(10, "Maximum of 10 guests")
    .required("Number of guests is required"),
  firstName: yup.string().required("First name is required"),
  surname: yup.string().required("Surname is required"),
  mobileNumber: yup
    .string()
    .matches(/^[0-9 ]+$/, "Enter a valid mobile number")
    .required("Mobile number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});
