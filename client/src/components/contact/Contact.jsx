import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { PiLineVerticalLight } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/Validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fadeIn } from "../scrollReveal";

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref);

  const form = useRef();
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);

  const showSuccessToast = () => toast.success("Message sent successfully!");
  const showErrorToast = () =>
    toast.error("Something went wrong. Please try again!");

  const onSubmit = async (values, actions) => {
    console.log(values, actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    console.log("submitted");

    emailjs
      .sendForm("service_ts2gl4j", "template_yfygkuu", form.current, {
        publicKey: "q4V9aUiDDSuPuMHey",
      })
      .then(
        () => {
          setSuccess(true);
          showSuccessToast();
        },
        (error) => {
          setErr(true);
          showErrorToast();
        }
      );
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className="main-contact">
      <motion.div
        className="contact"
        ref={ref}
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="textContainer">
          <h1>Contact Details</h1>
          <div className="details-grid">
            <div className="phone">
              <div className="icon-text">
                <MdLocalPhone className="icon" />
                <PiLineVerticalLight style={{ fontSize: "16px" }} />
                <p>Phone</p>
              </div>
              <a href="tel: +994 50 332 99 69">
                <p>+994 50 332 99 69</p>
              </a>
            </div>

            <div className="phone">
              <div className="icon-text">
                <RiWhatsappFill className="icon" />
                <PiLineVerticalLight style={{ fontSize: "16px" }} />
                <p>Whatsapp</p>
              </div>
              <a href="https://api.whatsapp.com/send/?phone=994503329969&text&type=phone_number&app_absent=0">
                <p>+994 50 332 99 69</p>
              </a>
            </div>

            <div className="phone email">
              <div className="icon-text">
                <MdEmail className="icon" />
                <PiLineVerticalLight style={{ fontSize: "16px" }} />
                <p>Email</p>
              </div>
              <a href="mailto: analytix.company@gmail.com">
                <p>analytix.company@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg width="100%" height="100%" viewBox="0 0 32.666 32.666">
              <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
              />
            </svg>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            onSubmit={handleSubmit}
            ref={form}
          >
            <h1>Send a Message</h1>
            <div className="name-surname">
              <div className="input-field">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  placeholder="First name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName ? "input-error" : ""
                  }
                />
                {errors.firstName && touched.firstName && (
                  <p className="error">{errors.firstName}</p>
                )}
              </div>
              <div className="input-field">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  placeholder="Last name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? "input-error" : ""
                  }
                />
                {errors.lastName && touched.lastName && (
                  <p className="error">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="input-field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={values.email}
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="input-field">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                placeholder="Phone Number"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.phoneNumber && touched.phoneNumber ? "input-error" : ""
                }
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <p className="error">{errors.phoneNumber}</p>
              )}
            </div>
            <div className="input-field">
              <label>Message</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your message"
                rows={4}
                className={
                  errors.message && touched.message ? "input-error" : ""
                }
              ></textarea>
              {errors.message && touched.message && (
                <p className="error">{errors.message}</p>
              )}
            </div>
            <div className="btn">
              <button
                className="sbt-btn sbt-btn-hover"
                disabled={isSubmitting}
                type="submit"
              >
                Send it
              </button>
              {/* {err && "Error"}
            {success && "Success"} */}
            </div>
          </motion.form>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </motion.div>
    </div>
  );
};

export default Contact;
