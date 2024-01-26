import React, { useState, useEffect } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import SocialMedia from "../components/SocialMedia";
import { footerLinks } from "../constants";
import { useGlobalContext } from "../context";

const Contact = () => {
  const { alert, showAlert } = useGlobalContext();
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    console.log(feedback);
  }, [feedback]);

  return (
    <section className="padding">
      <h2 className="mt-10 mb-3 font-palanquin text-4xl capitalize max-sm:text-2xl font-semibold text-center">
        <span className="text-blue-800">Contact </span>Us
      </h2>
      <p className="info-text text-center">
        Reach out to us via any means below
      </p>
      <section className="my-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7948182437735!2d6.7862979999999995!3d6.1582289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104393db4f97a725%3A0xb7e3dd6a91061d34!2sEdufun%20Technik%20STEM%20Hub%202!5e0!3m2!1sen!2sng!4v1667658289221!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"></iframe>
      </section>
      <section className="flex justify-wrap items-center flex-col md:flex-row gap-10 max-container">
        {/* LEFT COLUMN */}
        <div className="flex-1">
          <p className="my-4 lg:max-w-lg info-text">
            Please enter your details and message below to make enquires or send
            your feedback to Jay Footwears.
          </p>
          <form
            className="grid gap-4 relative"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              let values = [...formData.values()];
              if (values.includes("")) {
                showAlert(true, true, "Please fill all the fields");
                return;
              }

              const formObject = Object.fromEntries(formData);
              const newFeedback = [
                ...feedback,
                { id: feedback.length + 1, ...formObject },
              ];
              setFeedback(newFeedback);
              // axios.post(someUrl, formObject);
              showAlert(true, false, "Submitted Successfully!");
              e.currentTarget.reset();
            }}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="control"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Phone Number or Email"
              className="control"
            />
            <textarea
              rows="6"
              name="message"
              placeholder="Enter Message"
              className="control"></textarea>
            <Button
              label="SUBMIT"
              bgColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          </form>
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col">
          <h2 className="mt-10 font-palanquin text-2xl capitalize max-sm:text-2xl font-semibold lg:max-w-lg">
            <span className="text-blue-800">Connect </span> With Us
          </h2>

          <p className="mt-6 lg:max-w-lg info-text">
            You can also contact us via our phone number, whatsapp, email or
            social media handles below:
          </p>
          <ul className="mt-6 flex flex-col gap-3 font-montserrat font-medium">
            {footerLinks[2].links.map((link) => (
              <li key={link.name} className="hover:text-slate-gray">
                <a href={link.link} className="text-lg">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <SocialMedia />
        </div>
      </section>
    </section>
  );
};
export default Contact;
