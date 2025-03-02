document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    
    if (username && password) {
        localStorage.setItem("user", username);
        window.location.href = "user.html";
    } else {
        alert("Please enter valid credentials");
    }
});

document.getElementById("register-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    
    if (username && email && password) {
        alert("Registration successful! You can now log in.");
        window.location.href = "login.html";
    } else {
        alert("Please fill in all fields.");
    }
});

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}