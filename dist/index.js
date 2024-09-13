"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const storedUsername = localStorage.getItem("username");
    let buttonSubmit = document.querySelector(".user-button");
    const greetUser = (username) => {
        alert(`Hello ${username}`);
    };
    const saveUsernameToStorage = (username) => {
        localStorage.setItem("username", username);
    };
    if (storedUsername) {
        let userNameInput = document.querySelector(".username-input");
        userNameInput === null || userNameInput === void 0 ? void 0 : userNameInput.classList.add("logged-in");
    }
    buttonSubmit === null || buttonSubmit === void 0 ? void 0 : buttonSubmit.addEventListener("click", () => {
        let usernameValue = document.querySelector(".username");
        greetUser(usernameValue.value);
        saveUsernameToStorage(usernameValue.value);
        window.location.reload();
    });
});
