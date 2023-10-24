"use client";
import { Button, Input, Textarea, Image, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

const Form = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /\S+@\S+\.\S+/;

  const validateInput = () => {
    if (!email || !subject || !message) {
      setError("すべての項目を入力してください。");
      return false;
    }

    if (!emailRegex.test(email)) {
      setError("メールアドレスの形式が正しくありません。");
      return false;
    }

    setError("");
    return true;
  };

  const handleSend = () => {
    if (!validateInput()) {
      return;
    }
    setEmail("");
    setSubject("");
    setMessage("");
    alert("すみません、メールの送信はまだ未実装です");
  };

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4 lg:w-1/2">
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          className="w-full mb-4 mt-4"
          value={email}
          onValueChange={setEmail}
        />
        <Input
          label="Subject"
          placeholder="Enter email subject"
          className="w-full mb-4"
          value={subject}
          onValueChange={setSubject}
        />
        <Textarea
          label="Description"
          labelPlacement="inside"
          placeholder="Enter your description"
          className="w-full"
          value={message}
          onValueChange={setMessage}
        />
        <div className="flex justify-center">
          <Button
            className="mt-4 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
            onPress={handleSend}
          >
            Send
          </Button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-2xl mb-4">OR</p>
          <Link
            href="mailto:tosiki219@stu.kanazawa-u.ac.jp"
            className="inline-block"
          >
            <Image
              alt="Profile"
              className="object-cover rounded-full" // Adjust the size as needed
              src="/icon.png"
              width={100}
            />
            <span className="text-2xl text-white">Email</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
