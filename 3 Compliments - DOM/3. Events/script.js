//Events

const submitBtn = document.querySelector("#submitBtn");
const mailInput = document.querySelector("#mailInput");
const passwordInput = document.querySelector("#passwordInput");

//addEventListener(action, function(event) {})
//'action' parameter = The event action
//'function(event) {} = The function called in the event
//'event' parameter = Return everything that hapenned in the event (opitional)

//click
submitBtn.addEventListener("click", function() {
    if(mailInput.value === "" || passwordInput.value === "") {
        alert("Please, fill out the fields!");
        return;
    };

    alert("Logged in as " + mailInput.value);
});

//change
mailInput.addEventListener("change", function(event) {
    console.log(event);
});

//Event functions
//The default action that belongs to the event will not occur.
event.preventDefault();