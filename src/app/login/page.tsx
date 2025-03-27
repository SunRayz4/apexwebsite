"use client";
import { useState } from "react";
import styles from "@/styles/login.module.css";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = () => {
    setFormData({ ...formData });
  };

  const handleSubmit = () => {
   
    console.log("Logging in...", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h2 className={styles.heading}>APEX ERP Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="username"
              placeholder=" "
              className={styles.inputField}
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label>Username</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              name="password"
              placeholder=" "
              className={styles.inputField}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit" className={styles.button}>Login</button>
        </form>
        <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
      </div>
    </div>
  );
}
