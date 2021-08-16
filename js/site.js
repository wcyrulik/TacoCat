// Get the string from the page
function getValue() {

    document.getElementById("alert").classList.add("invisible");
    document.getElementById("alert").classList.remove("alert-danger");
    document.getElementById("alert").classList.remove("alert-success");
    let userString = document.getElementById("userString").value;
    if (userString.length > 0){
        let returnObj = checkForPalindrome(userString);
        displayString(returnObj);
    } else {
        alert('You must enter a word, phrase or sentence.  Try again.');
    }
}
//The Coder Foundry solution
function checkForPalindrome(userString){
    //Set the userString to lower case.
    userString = userString.toLowerCase();

    //Remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,'');

    let revString = [];
    let returnobj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index]; 
    }
    if (revString == userString) {
        returnobj.msg = "Well done!  You entered a palindrome!";
        returnobj.alertc = "alert-success";
    } else {
        returnobj.msg = "Sorry!  You did not enter a palimdrome.";
        returnobj.alertc = "alert-danger";
    }
    returnobj.reversed = revString;
    returnobj.userstring = userString;

    return returnobj;
}

//Display the reversed string back on the page.
function displayString(returnObj){
    document.getElementById("alert-header").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML 
        = `Your string reversed is: <strong>${returnObj.reversed}</strong>.`;
    document.getElementById("alert").classList.add(returnObj.alertc);
    document.getElementById("alert").classList.remove("invisible");
}