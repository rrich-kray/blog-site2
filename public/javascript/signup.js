const signupHandler = (event) => {
  event.preventDefault();
  const username = document.querySelector(".signup-username").value;
  const email = document.querySelector(".signup-email").value;
  const password = document.querySelector(".signup-pw").value;

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};
