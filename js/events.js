window.onload = function () {
    document.getElementById("divWithText").addEventListener("mousemove", trackMouse);
    let displayDivs = document.getElementsByClassName("display-div");
    for (let i = 0; i < displayDivs.length; i++) {
        displayDivs[i].addEventListener("click", function () {
           console.log("target: " + event.target.id + " and this: " + this.id);
        }, true);
    }
    function trackMouse(event) {
        console.log(event.timeStamp);
        document.getElementById("mouseX").innerText = event.clientX;
        document.getElementById("mouseY").innerText = event.clientY;
    }

    /**
     * Cancelling Events:
     * Check if event.cancelable. If true, preventDefault()
     * Use stopPropagation() to do such...
     * Also use returnFalse()
     */
};