let button = document.getElementById("submit");
button.onclick = myFunction;


function myFunction() {
    document.getElementById("myButton").innerHTML = "You're pretty cool <3";
};

document.getElementById("form").onsubmit = function (event) {
    event.preventDefault();
    let languages = document.getElementById("add").value;

    addToList(languages);
};


function addToList(item) {

document.getElementById("languages").innerHTML += `<li>`+ item+ `</li>`

};