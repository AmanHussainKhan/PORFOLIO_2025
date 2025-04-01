import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner";

function ContactPage() {
  //
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendMessage = () => {
    console.log("first");
  };
  return (
    <div>
      <div
        className={
          loading ? `absolute inset-0 bg-white/6 backdrop-blur-sm z-10` : ""
        }
      ></div>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <ThreeDots
            visible={true}
            height="70"
            width="70"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
          />
        </div>
      )}
      <div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold border-b-2 border-[#4CAF50] pb-2 text-[#D4D4D4]">
            Get in Touch
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-left">
            <p className="text-md">
              <span className="text-[#E06C75] font-semibold">📍 Location:</span>{" "}
              Raipur, Chhattisgarh
            </p>
            <p className="text-md">
              <span className="text-[#E06C75] font-semibold">📧 Email:</span>{" "}
              <a
                href="mailto:amanhussainkhan3@gmail.com"
                className="text-[#98C379] underline"
              >
                amanhussainkhan3@gmail.com
              </a>
            </p>
            <p className="text-md">
              <span className="text-[#E06C75] font-semibold">🔗 LinkedIn:</span>{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/amanhussainkhan/"
                className="text-[#98C379] underline"
              >
                linkedin.com/amanhussainkhan
              </a>
            </p>
            <p className="text-md">
              <span className="text-[#E06C75] font-semibold">🐙 GitHub:</span>{" "}
              <a
                target="_blank"
                href="https://github.com/amanhussainkhan"
                className="text-[#98C379] underline"
              >
                github.com/amanhussainkhan
              </a>
            </p>
          </div>
          <p className="text-lg text-[#E5C07B] mt-10">
            * This Message will be sent to my email. *
          </p>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setLoading(true);
              try {
                const response = await axios.post(
                  "http://localhost:8080/api/contact",
                  values
                );
                setLoading(false);
                alert("Message sent successfully!");
                resetForm();
              } catch (error) {
                console.error("Error sending message:", error);
                alert("Failed to send message. Please try again.");
              }
            }}
          >
            <Form className="mt-6 flex flex-col gap-4">
              {/* Name Field */}
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="p-2 border-2 border-[#D4D4D4] bg-[#1E1E1E] text-[#D4D4D4] rounded-md focus:border-[#61AFEF] outline-none w-full"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-2 border-2 border-[#D4D4D4] bg-[#1E1E1E] text-[#D4D4D4] rounded-md focus:border-[#61AFEF] outline-none w-full"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="p-2 border-2 border-[#D4D4D4] bg-[#1E1E1E] text-[#D4D4D4] rounded-md focus:border-[#61AFEF] outline-none w-full"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-500"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="px-4 py-2 bg-[#D4D4D4] text-[#121212] font-semibold rounded-md hover:bg-[#61AFEF] transition-all duration-300"
              >
                Send Message
              </motion.button>
            </Form>
          </Formik>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;
