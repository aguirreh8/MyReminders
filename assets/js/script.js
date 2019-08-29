const submitBtn = document.getElementById("submitBtn");
const notesHolder = document.getElementById("notesHolder");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    const noteTitle = document.getElementById("noteTitle").value;
    const noteMessage = document.getElementById("noteMessage").value;
    if (noteMessage) {
        const newNoteCard = document.createElement("div");
        const newNoteTitle = document.createElement("h3");
        const newNoteMessage = document.createElement("p");

        noteTitle ? newNoteTitle.innerHTML = noteTitle : newNoteTitle.innerHTML = "No Title";
        newNoteMessage.innerHTML = noteMessage;
        
        newNoteCard.classList.add("note-card");
        newNoteCard.appendChild(newNoteTitle);
        newNoteCard.appendChild(newNoteMessage);
        notesHolder.appendChild(newNoteCard);
    } else {
        alert("Please type in a message");
    }
})

