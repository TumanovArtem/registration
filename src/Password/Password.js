import React, {useState} from "react";
import "./Password.css";

function Password(props) {
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleChange(e) {
        if (e.target.name === "password") setPassword(e.target.value);
        if (e.target.name === "passwordConfirmation") setPasswordConfirmation(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (password !== passwordConfirmation) {
          alert("Пароли не совпадают");
          setPassword("");
          setPasswordConfirmation("");
          return;
        }
      
        props.onSubmit(3, {password});
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <h1>Шаг 2</h1>
            <label htmlFor="password">
                Введите пароль:
                <input type="password" name="password" value={password} onChange={handleChange} />
            </label>
            <label htmlFor="passwordConfirmation">
                Введите пароль еще раз:
                <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleChange} />
            </label>
            <input type="submit" value="Зарегистрироваться" />
        </form>
    );
}

export default Password;