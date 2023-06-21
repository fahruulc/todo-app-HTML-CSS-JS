let dataNotes = [];

const addNote = () => {
  let userInputData = document.getElementById("userInput");
  let userInputValue = userInputData.value;

  if (userInputValue !== "" || userInputValue !== null) {
    dataNotes.push(userInputValue);
    userInputData.value = "";

    showNotes();
  }
};

const showNotes = () => {
  let showNotesElement = document.getElementById("listNotes");
  showNotesElement.innerHTML = "";

  for (let i = 0; i < dataNotes.length; i++) {
    let note = document.createElement("li");
    note.textContent = dataNotes[i];
    note.addEventListener("click", () => {
      deleteNote(i);
    });
    showNotesElement.appendChild(note);
  }
};

const deleteNote = (index) => {
  dataNotes.splice(index, 1);
  showNotes();
};
