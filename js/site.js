// Get the string from the page
function getValue() {

    document.getElementById("alert").classList.add("invisible");
    document.getElementById("alert").classList.remove("alert-danger");
    document.getElementById("alert").classList.remove("alert-success");
    let userString = document.getElementById("userString").value;
    userString = removeUnwantedChars(userString).toLowerCase();
    if (userString.length > 0){
        let revString = reverseString(userString);
        displayString(revString, userString);
    } else {
        alert('You must enter a word, phrase or sentence.  Try again.');
    }
}

//Reverse the string
function reverseString(userString){
    let revString = "";

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index]; 
    }
    return revString;
}

function removeUnwantedChars(userString) {
    let cleanString = '';
    let letters = /^[A-Za-z]+$/;

    for (let i = 0; i <= userString.length -1; i++){
        if (userString[i].match(letters)){
            cleanString += userString[i];
        }
    }
    return cleanString;
}

//Display the reversed string back on the page.
function displayString(revstring, userstring){
    if (revstring == userstring) {
        document.getElementById("alert-header").innerHTML = 'Sccess!!';
        document.getElementById("msg").innerHTML = `Your string <strong>${userstring}</strong> is a palindrome`;
        document.getElementById("alert").classList.add("alert-success");
    } else {
        document.getElementById("alert-header").innerHTML = 'Sorry ';
        document.getElementById("msg").innerHTML = `Your string <strong>${userstring}</strong> is NOT a palindrome`;
        document.getElementById("alert").classList.add("alert-danger");
    }
    document.getElementById("alert").classList.remove("invisible");
}

