"use client";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebase_auth } from "@/firebase";

const Login = () => {
  const [email, setEmail] = useState("ibrahimy@gmail.com");
  const [password, setPassword] = useState("ibrahim 2000");
  const handlelog = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(firebase_auth, email, password)
      .then((userCredential) => {
        // login in
        console.log("hi");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handlelog}>login</button>
    </div>
  );
};

export default Login;
