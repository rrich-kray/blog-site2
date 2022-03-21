const loginHandler = async (event) => {
  const username = document.querySelector(".login-username").value;
  const password = document.querySelector(".login-pw").value;

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      console.log(response.statusText);
    }
  }
};

document.querySelector(".login").addEventListener("click", loginHandler);
