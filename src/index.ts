document.addEventListener("DOMContentLoaded", () => {
  const storedUsername: string | null = localStorage.getItem("username");
  let buttonSubmit = document.querySelector(".user-button");
  //console.log("Button", buttonSubmit);
  const greetUser = (username: string): void => {
    alert(`Hello ${username}`);
  };
  const saveUsernameToStorage = (username: string): void => {
    localStorage.setItem("username", username);
  };
  if (storedUsername) {
    let userNameInput = document.querySelector(".username-input");
    userNameInput?.classList.add("logged-in");
  }
  buttonSubmit?.addEventListener("click", () => {
    let usernameValue = document.querySelector(".username") as HTMLInputElement;
    greetUser(usernameValue.value);
    saveUsernameToStorage(usernameValue.value);
    window.location.reload();
  });
});
