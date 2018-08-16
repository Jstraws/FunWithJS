window.onload = function () {
    console.log("Page loaded!");
    counter = getCount();
    bearCounter = getCount("Bear");
    penguinCounter = getCount("Penguin");
    failedLoginCounter = getCount("Failed Login");
    isLoggedIn = false;
};

function getCount(noun) {
    let count = 0;
    return function () {
        count += 1;
        if(noun) {
            console.log(noun + " count is " + count);
        } else {
            console.log("count is " + count);
        }
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username && password) {
        if (username === "Aretha" && password === "awesome") {
            isLoggedIn = true;
            console.log("Success");
        } else {
            isLoggedIn = false;
            if (failedLoginCounter() > 3) {
                console.log("Too many attempts! Account Locked");
            }
        }
    }
}