const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    // console.log("Hello world!");
    const noteMessage = document.getElementById("noteMessage").value;
    if (!noteMessage) {
        alert("Please type in a  message");
    }
})

