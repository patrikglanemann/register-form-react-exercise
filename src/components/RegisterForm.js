import { useState } from "react";
import "./RegisterForm.css";
export default function RegisterForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
    email: "",
    emailRepeat: "",
  });

  function handleOnChange(event) {
    const value = event.target.value;
    const key = event.target.name;

    const newObject = { ...user };
    newObject[key] = value;
    setUser(newObject);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    let isPasswordCorrect = false;
    let isEmailCorrect = false;
    if (user.password.length < 3) {
      alert("Password to short");
    } else if (user.password === user.passwordRepeat && user.password) {
      isPasswordCorrect = true;
    } else {
      alert("Passwords don't match");
    }

    if (user.email === user.emailRepeat && user.email) {
      isEmailCorrect = true;
    } else {
      alert("Emails don't match");
    }

    if (isPasswordCorrect && isEmailCorrect) {
      //Form reset
      const resetObject = {
        username: "",
        password: "",
        passwordRepeat: "",
        email: "",
        emailRepeat: "",
      };

      setUser(resetObject);

      const userData = {
        username: user.username,
        email: user.email,
        password: user.password,
      };
      console.log(userData);
    } else {
      alert("There was a mistake.");
    }
    console.log(user);
  }

  return (
    <form className="RegisterForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        id="username"
        value={user.username}
        onChange={handleOnChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        value={user.password}
        onChange={handleOnChange}
      />
      <input
        type="password"
        placeholder="repeat password"
        name="passwordRepeat"
        id="passwordRepeat"
        value={user.passwordRepeat}
        onChange={handleOnChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        value={user.email}
        onChange={handleOnChange}
      />
      <input
        type="email"
        placeholder="repeat email"
        name="emailRepeat"
        id="emailRepeat"
        value={user.emailRepeat}
        onChange={handleOnChange}
      />
      <button type="submit"> Register! </button>
    </form>
  );
}
