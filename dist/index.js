"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const storedUsername = localStorage.getItem("username");
    let buttonSubmit = document.querySelector(".user-button");
    let submitExpenseButton = document.querySelector(".expense-button");
    const greetUser = (username) => {
        alert(`Hello ${username}`);
    };
    const saveUsernameToStorage = (username) => {
        localStorage.setItem("username", username);
    };
    const checkForUser = () => {
        if (storedUsername) {
            let userNameInput = document.querySelector(".username-input");
            let greeting = document.querySelector(".show-greeting");
            let greetingText = document.querySelector(".greeting");
            if (greetingText) {
                greetingText.innerHTML = `Hi ${storedUsername}`;
            }
            greeting === null || greeting === void 0 ? void 0 : greeting.classList.remove("no-show");
            userNameInput === null || userNameInput === void 0 ? void 0 : userNameInput.classList.add("logged-in");
        }
        else {
            let expenseForm = document.querySelector(".expense-form");
            if (expenseForm) {
                expenseForm.style.display = "none";
            }
        }
    };
    checkForUser();
    const createAnExpenseDiv = (expenseData) => {
        const expenseContainer = document.createElement("div");
        const largeContainer = document.querySelector(".large-expense-container");
        expenseContainer.className = "expense-container";
        const expenseName = document.createElement("p");
        expenseName.textContent = expenseData.expenseName;
        const expenseAmount = document.createElement("p");
        expenseAmount.textContent = expenseData.expenseAmount.toString();
        expenseContainer.appendChild(expenseName);
        expenseContainer.appendChild(expenseAmount);
        largeContainer === null || largeContainer === void 0 ? void 0 : largeContainer.appendChild(expenseContainer);
    };
    buttonSubmit === null || buttonSubmit === void 0 ? void 0 : buttonSubmit.addEventListener("click", () => {
        let usernameValue = document.querySelector(".username");
        greetUser(usernameValue.value);
        saveUsernameToStorage(usernameValue.value);
        window.location.reload();
    });
    submitExpenseButton === null || submitExpenseButton === void 0 ? void 0 : submitExpenseButton.addEventListener("click", () => {
        let expenseNameValue = document.querySelector(".expense-name");
        let expenseAmountValue = document.querySelector(".expense-amount");
        createAnExpenseDiv({
            expenseName: expenseNameValue.value,
            expenseAmount: Number(expenseAmountValue.value),
        });
        expenseNameValue.value = "";
        expenseAmountValue.value = "";
    });
});
