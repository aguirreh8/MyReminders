const submitBtn = document.getElementById("submitBtn");
const notesHolder = document.getElementById("notesHolder");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    // console.log("Hello world!");
    const noteMessage = document.getElementById("noteMessage").value;
    if (!noteMessage) {
        alert("Please type in a  message");
    } else {
        const newNoteCard = document.createElement("div");
        newNoteCard.classList.add("note-card");
        notesHolder.appendChild(newNoteCard);
    }
})

