// Get notes from Local Storage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Total Notes
document.getElementById("totalNotes").innerText = notes.length;

// Total Categories
const categorySet = new Set();

notes.forEach(note => {
    categorySet.add(note.category);
});

document.getElementById("categories").innerText = categorySet.size;

// Total Favorite Notes
const favoriteCount = notes.filter(note => note.favorite).length;

document.getElementById("favorites").innerText = favoriteCount;
// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {

    window.location.href = "login.html";

}

// Logout
function logout() {

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("userEmail");

    alert("Logged Out Successfully");

    window.location.href = "login.html";

}
