function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let msg = document.getElementById("msg");

    if (!name || !email || !password) {
        msg.innerText = "Please fill all fields ❌";
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    // save user in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    msg.innerText = "Registered Successfully ✔";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}