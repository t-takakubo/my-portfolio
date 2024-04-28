import React from "react";
import { Form } from "./components/Form";

export const ContactPage = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-3xl font-bold">Contact</div>
      </div>
      <Form />
    </div>
  );
};
