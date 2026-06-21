function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        if (data.token) {
            localStorage.setItem("token", data.token);
            document.getElementById("msg").innerText = "Login Successful ✔";
        } else {
            document.getElementById("msg").innerText = data.message;
        }
    });
}