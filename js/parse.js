let bearText = '{"bears":[{"id":4, "name":"Aretha", "cave":{"id":56,"name":"Valhalla"}}, ' +
    '{"id":7, "name":"Gandalf", "cave":{"id":34,"name":"Isengard"}}]}';
let bearObj = JSON.parse(bearText);

function showBears() {
    let bearDiv = document.getElementById("bearDiv");

    let bears = bearObj.bears;
    for (let i = 0; i < bears.length; i++) {
        let b = bears[i];
        let newPara = document.createElement("p");
        newPara.innerText = "name: " + b.name + "; cave: " + b.cave.name;
        bearDiv.appendChild(newPara);
        console.log(bears[i]);
    }
}