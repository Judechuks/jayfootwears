import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Alert from "../components/Alert";
import { useGlobalContext } from "../context";

const Subscribe = () => {
  const [subscribers, setSubscribers] = useState([
    { id: 1, user: "john@gmail.com" },
  ]);
  const subRef = useRef();
  const { alert, showAlert } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = subRef.current.value;
    if (!newPerson) {
      showAlert(true, true, "Please enter your Email address");
      return;
    }
    const newSubscribers = [
      ...subscribers,
      { id: subscribers.length + 1, user: newPerson },
    ];
    setSubscribers(newSubscribers);
    subRef.current.value = "";
    showAlert(true, false, "Thanks for Subscribing!");
  };

  useEffect(() => {
    console.log(subscribers);
    // send to a database
  }, [subscribers]);

  return (
    <section className="max-container flex max-lg:flex-col max-lg:gap-y-8 justify-between items-center">
      <h3 className="font-bold font-palanquin text-4xl leading-[68px] lg:max-w-md max-sm:text-2xl text-center">
        Sign Up for <span className="text-blue-800">Updates</span> & Newsletter
      </h3>
      <form
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-3 px-2 py-1.5 sm:border  sm:border-slate-gray rounded-full relative"
        onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Email"
          className="input"
          ref={subRef}
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      </form>
    </section>
  );
};
export default Subscribe;
