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

var palletteColor = ['blue', 'red', 'orange', 'purple', 'indigo'];

function colordivs() {
    for (var i = 0; i < 5; i++) {
        let div = document.createElement('div');
        div.className = 'colors';
        div.style.backgroundColor = palletteColor[i];
        palette.appendChild(div);
    }
};
colordivs();
var selectedColor = {
    color: ''
}
palette.addEventListener('click', function() {
    // console.log(event.target);
    selectedColor.color = event.target.style.backgroundColor

    console.log(selectedColor);
})
boxContainer.addEventListener('click', function() {
    event.target.style.backgroundColor = selectedColor['color'];
})
