const submitBtn = document.getElementById("submitBtn");
const notesHolder = document.getElementById("notesHolder");
const clearBtn = document.getElementById("clearBtn");
let notesCollection = [];

document.addEventListener("DOMContentLoaded", function() {
    JSON.parse(localStorage.getItem("savedNotes")) ? 
        notesCollection = JSON.parse(localStorage.getItem("savedNotes"))  : notesCollection = [];
    console.log(notesCollection);
    notesCollection.forEach(function(i) {
        createNoteElement(i.title, i.message, i.id)
    })
});

const submitNote = () => {
    const noteTitle = document.getElementById("noteTitle").value;
    const noteMessage = document.getElementById("noteMessage").value;
    let generateId = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + 
        Date.now();
    
    createNoteElement(noteTitle, noteMessage, generateId);
    
    const sendInfoToStorageObj = {
        id: generateId,
        title: noteTitle,
        message: noteMessage
    }

    notesCollection.push(sendInfoToStorageObj);
    localStorage.setItem("savedNotes", JSON.stringify(notesCollection));
}

const deleteNote = (id) => {
    const elementToRemove = document.getElementById(id);
    notesHolder.removeChild(elementToRemove);
    for(i = 0; i < notesCollection.length; i++) {
        if(notesCollection[i].id == id) {
            notesCollection.splice(i, 1);
        }
    }
    localStorage.setItem("savedNotes", JSON.stringify(notesCollection));
}

const createNoteElement = (noteTitle, noteMessage, id) => {
    const newNoteCard = document.createElement("div");
    const newNoteTitle = document.createElement("h3");
    const newNoteMessage = document.createElement("p");
    const newNoteDltBtn = document.createElement("button");
    newNoteDltBtn.innerHTML = "X";

    noteTitle ? newNoteTitle.innerHTML = noteTitle : newNoteTitle.innerHTML = "No Title";
    newNoteMessage.innerHTML = noteMessage;
    
    newNoteCard.classList.add("note-card");
    newNoteCard.setAttribute("id", id);
    newNoteDltBtn.classList.add("delete-note-btn");
    newNoteDltBtn.setAttribute("id", id);
    newNoteDltBtn.setAttribute("onclick", "deleteNote(this.id)")
    
    newNoteCard.appendChild(newNoteDltBtn);
    newNoteCard.appendChild(newNoteTitle);
    newNoteCard.appendChild(newNoteMessage);
    notesHolder.appendChild(newNoteCard);
}