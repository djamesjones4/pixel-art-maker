// create divs
// for (i = 0; i < 1600; i++) {
//     document.createElement('div')
//     div.style.width = '20px';
//     div.style.height = '20px';
//     div.style.background - color =
// }




var body = document.getElementsByTagName('body')[0];
var boxContainer = document.createElement('div');
boxContainer.className = "container";
body.appendChild(boxContainer)

function createDivs() {
    for (let i = 0; i < 1184; i++) {
        var div = document.createElement('div')
        boxContainer.appendChild(div)
        div.className = "pixel"
    }
}
createDivs();

var palette = document.createElement('div');
palette.className = "palette";
body.appendChild(palette);

(function colordivs() {
    for (var i = 0; i < 5; i++) {
        let div = document.createElement('div');
        div.id = "abcdefghijklmnop" [i];
        palette.appendChild(div);
    }
})();
palette.addEventListener('click', funtion() {
    if (event.target.id === "a" || event.target.id === "b" || event.target.id === "c" || event.target.id === "d" || event.target.id === "e") {
        var selectedColor = event.target.style.backgroundColor
    }
})
console.log(selectedColor);
// container.addEventListener('click', funciotn() {
//     event.target.style.backgroundColor = selectedColor;
// })
