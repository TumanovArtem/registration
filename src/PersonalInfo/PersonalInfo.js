import React, { useState } from "react";
import "./PersonalInfo.css";

function PersonalInfo(props) {

    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    function handleChange(e) {
        if (e.target.name === "userName") setUserName(e.target.value);
        if (e.target.name === "age") setAge(e.target.value);
        if (e.target.name === "email") setEmail(e.target.value) 
    }

    function handleSubmit(e) {
        e.preventDefault();

        const nameRegexp = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        if (!nameRegexp.test(String(userName).toLowerCase())) {
          alert("Введено некорректное имя");
          setUserName("");
          return;
        }
      
        if (!isFinite(age) || Number(age) < 1 || Number(age) > 150) {
          alert("Введен некорректный возраст");
          setAge("");
          return;
        }
      
        const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegexp.test(String(email).toLowerCase())) {
          alert("Введен некорректный email");
          setEmail("");
          return;
        }

        props.onSubmit(2, {userName, age, email});
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <h1>Шаг 1</h1>
            <label htmlFor="userName">
                Ваше имя: 
                <input type="text" name="userName" value={userName} onChange={handleChange} />
            </label>
            <label htmlFor="age">
                Ваш возраст: 
                <input type="text" name="age" value={age} onChange={handleChange} />
            </label>
            <label htmlFor="email">
                Ваша почта:
                <input type="text" name="email" value={email} onChange={handleChange} />
            </label>
            <input type="submit" value="Далее" />
        </form>
    );
}

export default PersonalInfo;