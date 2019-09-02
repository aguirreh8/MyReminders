const submitBtn = document.getElementById("submitBtn");
const notesHolder = document.getElementById("notesHolder");
const clearBtn = document.getElementById("clearBtn");
let notesCollection = [];

// submitBtn.addEventListener("click", function(e) {
//     e.preventDefault();
// })



// clearBtn.addEventListener("click", function(e) {
//     e.preventDefault();
// })

const submitNote = () => {
    const noteTitle = document.getElementById("noteTitle").value;
    const noteMessage = document.getElementById("noteMessage").value;
    let generateId = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + 
        Date.now();
    
    if (noteMessage) {
        const newNoteCard = document.createElement("div");
        const newNoteTitle = document.createElement("h3");
        const newNoteMessage = document.createElement("p");
        const newNoteDltBtn = document.createElement("button");
        newNoteDltBtn.innerHTML = "X";

        noteTitle ? newNoteTitle.innerHTML = noteTitle : newNoteTitle.innerHTML = "No Title";
        newNoteMessage.innerHTML = noteMessage;
        
        newNoteCard.classList.add("note-card");
        newNoteCard.setAttribute("id", generateId);
        newNoteDltBtn.classList.add("delete-note-btn");
        newNoteDltBtn.setAttribute("id", generateId);
        newNoteDltBtn.setAttribute("onclick", "deleteNote(this.id)")
        
        newNoteCard.appendChild(newNoteDltBtn);
        newNoteCard.appendChild(newNoteTitle);
        newNoteCard.appendChild(newNoteMessage);
        notesHolder.appendChild(newNoteCard);
    } 
    // else {
    //     alert("Please type in a message");
    // }
}

const deleteNote = (id) => {
    console.log(id);
}

const localStorageTest = () => {
    const myObj = {
        id: 1,
        name: "dude"
    }

    notesCollection.push(myObj);
    console.log(notesCollection);
    localStorage.setItem("myNotes", JSON.stringify(notesCollection));
}