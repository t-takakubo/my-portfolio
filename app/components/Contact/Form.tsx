"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          className="w-full mb-4 mt-4"
          onValueChange={setEmail}
        />
        <Input
          label="Subject"
          placeholder="Enter email subject"
          className="w-full mb-4"
          onValueChange={setSubject}
        />
        <Textarea
          label="Description"
          labelPlacement="inside"
          placeholder="Enter your description"
          className="w-full"
          onValueChange={setMessage}
        />
        <div className="flex justify-center">
          <Button className="mt-4 bg-blue-500 hover:bg-blue-700 text-foregrand font-bold py-2 px-4 rounded">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
