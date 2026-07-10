let notes = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

// Add Note
function addNote() {

    const title = document.getElementById("title").value.trim();
    const category = document.getElementById("category").value;
    const note = document.getElementById("note").value.trim();

    if(title==="" || note===""){
        alert("Please fill all fields");
        return;
    }

    notes.push({
        title,
        category,
        note,
        date:new Date().toLocaleString()
    });

    localStorage.setItem("notes",JSON.stringify(notes));

    document.getElementById("title").value="";
    document.getElementById("note").value="";

    displayNotes();

}
// Display Notes
function displayNotes() {
    const container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((item, index) => {
        container.innerHTML += `
            <div class="note">
                <h3>${item.title}</h3>

                <p><strong>Category:</strong> ${item.category}</p>

                <p>${item.note}</p>

                <small><strong>Created:</strong> ${item.date}</small>

                <br><br>

                <button class="edit" onclick="editNote(${index})">
                    Edit
                </button>

                <button class="delete" onclick="deleteNote(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

// Delete Note
function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

// Edit Note
function editNote(index) {
    document.getElementById("title").value = notes[index].title;
    document.getElementById("category").value = notes[index].category;
    document.getElementById("note").value = notes[index].note;

    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}

// Search Notes
function searchNotes() {

    const search = document.getElementById("search").value.toLowerCase();

    const container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((item, index) => {

        if (
            item.title.toLowerCase().includes(search) ||
            item.note.toLowerCase().includes(search) ||
            item.category.toLowerCase().includes(search)
        ) {

            container.innerHTML += `
                <div class="note">
                    <h3>${item.title}</h3>

                    <p><strong>Category:</strong> ${item.category}</p>

                    <p>${item.note}</p>

                    <small><strong>Created:</strong> ${item.date}</small>

                    <br><br>

                    <button class="edit" onclick="editNote(${index})">Edit</button>

                    <button class="delete" onclick="deleteNote(${index})">Delete</button>
                </div>
            `;
        }

    });
}
// Dark Mode
function toggleTheme(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        document.getElementById("themeBtn").innerHTML="☀️ Light Mode";
    }
    else{
        localStorage.setItem("theme","light");
        document.getElementById("themeBtn").innerHTML="🌙 Dark Mode";
    }

}

// Load Theme
if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
    document.getElementById("themeBtn").innerHTML="☀️ Light Mode";
}
