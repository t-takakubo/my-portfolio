import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Contact/Form";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-3xl font-bold">Contact</div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
