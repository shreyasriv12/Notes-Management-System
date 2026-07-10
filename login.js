function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    // Save Login Status
    localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem("userEmail", email);

    alert("Login Successful");

    window.location.href = "dashboard.html";
}
