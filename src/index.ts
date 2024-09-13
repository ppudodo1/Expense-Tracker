document.addEventListener("DOMContentLoaded", () => {
  interface Expense {
    expenseName: string;
    expenseAmount: number;
  }
  const storedUsername: string | null = localStorage.getItem("username");
  let buttonSubmit = document.querySelector(".user-button");
  let submitExpenseButton = document.querySelector(".expense-button");
  const greetUser = (username: string): void => {
    alert(`Hello ${username}`);
  };
  const saveUsernameToStorage = (username: string): void => {
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
      greeting?.classList.remove("no-show");
      userNameInput?.classList.add("logged-in");
    } else {
      let expenseForm = document.querySelector(".expense-form") as HTMLElement;
      if (expenseForm) {
        expenseForm.style.display = "none";
      }
    }
  };
  checkForUser();
  const createAnExpenseDiv = (expenseData: Expense) => {
    const expenseContainer = document.createElement("div");
    const largeContainer = document.querySelector(".large-expense-container");
    expenseContainer.className = "expense-container";
    const expenseName = document.createElement("p");
    expenseName.textContent = expenseData.expenseName;
    const expenseAmount = document.createElement("p");
    expenseAmount.textContent = expenseData.expenseAmount.toString();
    expenseContainer.appendChild(expenseName);
    expenseContainer.appendChild(expenseAmount);
    largeContainer?.appendChild(expenseContainer);
    //console.log(exp)
  };
  buttonSubmit?.addEventListener("click", () => {
    // Type assertion to specify more specific type, given that the TypeScript
    // Initially doesn't know what type of HTML element is being returned here
    let usernameValue = document.querySelector(".username") as HTMLInputElement;
    greetUser(usernameValue.value);
    saveUsernameToStorage(usernameValue.value);
    window.location.reload();
  });
  submitExpenseButton?.addEventListener("click", () => {
    let expenseNameValue = document.querySelector(
      ".expense-name"
    ) as HTMLInputElement;
    let expenseAmountValue = document.querySelector(
      ".expense-amount"
    ) as HTMLInputElement;
    createAnExpenseDiv({
      expenseName: expenseNameValue.value,
      expenseAmount: Number(expenseAmountValue.value),
    });
    expenseNameValue.value = "";
    expenseAmountValue.value = "";
    //console.log(expenseNameValue.value);
    //console.log(expenseAmountValue.value);
  });
});
