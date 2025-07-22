//script.js

const input = document.getElementById("journalInput");
const charCount = document.getElementById("charCount");
const entryList = document.getElementById("entryList");

// Load existing entries from localStorage or initialize an empty array
let entries = JSON.parse(localStorage.getItem("entries")) || [];

// Function to render entries in the list
function renderEntries() {
  entryList.innerHTML = "";
  entries.forEach((entry) => {
      const li = document.createElement("li");
      li.textContent = `${entry.date} — ${entry.text}`;
      entryList.appendChild(li);
    });
}

// Event listener for the save button
saveBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  // Get today's date in a readable format
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Check if the entry for today already exists
  const existingEntry = entries.find((entry) => entry.date === today);

  if (existingEntry) {
    alert("You have already saved an entry for today.");
    return;
  }

  //If not, save the new entry
  entries.push({ text: text, date: today });
  localStorage.setItem("entries", JSON.stringify(entries));
  input.value = "";
  renderEntries();

});

renderEntries();
