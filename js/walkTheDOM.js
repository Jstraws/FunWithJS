window.onload = function () {
    document.getElementById("p1").textContent += "plus Some new text";
    let p2Text = document.getElementById("p2").firstChild.nodeValue;
    console.log(p2Text);
    let p2 = document.getElementById("p2");
    console.log(p2);
    let p3 = document.createElement("p");
    let node = document.createTextNode("This is new text");
    p3.appendChild(node);
    document.getElementById("div1").insertBefore(p3, p2);
};