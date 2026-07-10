// Get notes from Local Storage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Category Count
let categoryCount = {};

notes.forEach(note => {
    if (categoryCount[note.category]) {
        categoryCount[note.category]++;
    } else {
        categoryCount[note.category] = 1;
    }
});

const labels = Object.keys(categoryCount);
const values = Object.values(categoryCount);

// ==========================
// Pie Chart
// ==========================
new Chart(document.getElementById("categoryChart"), {
    type: "pie",
    data: {
        labels: labels,
        datasets: [{
            label: "Notes by Category",
            data: values,
            backgroundColor: [
                "#4CAF50",
                "#2196F3",
                "#FFC107",
                "#E91E63",
                "#9C27B0",
                "#FF5722",
                "#009688"
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});

// ==========================
// Bar Chart
// ==========================
new Chart(document.getElementById("notesChart"), {
    type: "bar",
    data: {
        labels: labels,
        datasets: [{
            label: "Number of Notes",
            data: values,
            backgroundColor: "#007bff"
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
