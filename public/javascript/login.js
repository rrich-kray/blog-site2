const loginHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector(".login-username").value;
  const password = document.querySelector("login-pw").value;

  if (username && password) {
    const response = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      response.statusText;
    }
  }
};
