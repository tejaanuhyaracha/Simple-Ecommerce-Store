function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    let msg = document.getElementById("msg");

    // check if user exists
    if (!user) {
        msg.innerText = "No user found. Please register first ❌";
        return;
    }

    // check login details
    if (email === user.email && password === user.password) {
        msg.innerText = "Login Successful ✔";

        // save session
        localStorage.setItem("loggedIn", "true");

        // redirect to home page
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } else {
        msg.innerText = "Invalid email or password ❌";
    }
}