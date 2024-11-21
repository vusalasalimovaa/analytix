import * as yup from "yup";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const basicSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(20)
    .required("Required"),
  lastName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid last name")
    .max(20)
    .required("Required"),
  email: yup.string().email("Invalid email format").required("Required"),
  phoneNumber: yup.string().matches(phoneRegExp, "Invalid phone"),
  message: yup.string().required("Required")
});
