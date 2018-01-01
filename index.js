const body = document.getElementsByTagName('body')[0];
const boxContainer = document.createElement('div');

boxContainer.className = "container";
boxContainer.id = "canvas";
body.appendChild(boxContainer)

for (i = 0; i < 621; i++) {
  let div = document.createElement('div')
  boxContainer.appendChild(div)
  div.className = "pixel"
}

let palette = document.createElement('div');
palette.className = "palette";
palette.id = 'palette-id'
body.appendChild(palette);

let palletteColor = [
  'red',
  '#EA882C',
  'rgb(38, 140, 162)',
  '#50d536',
  'indigo',
  '#21e8ee',
  '#ffffff',
  'rgb(232, 143, 165)'
];

for (let i = 0; i <= 7; i++) {
  let div = document.createElement('div');
  div.className = 'colors ';
  div.className += palletteColor[i];
  div.style.backgroundColor = palletteColor[i];
  palette.appendChild(div);
}

let selectedColor = {
  color: ''
}
palette.addEventListener('click', function() {
  if (event.target.id !== 'palette-id') {
    selectedColor.color = event.target.style.backgroundColor
  }
  console.log(selectedColor);
})
let mouseDown = false;
// let mouseLeave = false;
boxContainer.addEventListener('mousedown', function() {
  mouseDown = true;
})
boxContainer.addEventListener('mouseup', function() {
  mouseDown = false;
})
boxContainer.addEventListener('mouseover', function() {
  // mouseLeave = true;
  if (event.target.id !== "canvas" && mouseDown === true) {
    event.target.style.backgroundColor = selectedColor['color'];
  }

})
boxContainer.addEventListener('click', function() {
  if (event.target.id !== 'canvas') {
    event.target.style.backgroundColor = selectedColor['color'];
  }
})

// toggle class on click event so when clicked again the class and color of the pixel will revert to white

// boxContainer.addEventListener('mouseleave', function() {
//     if (event.target.id === 'canvas')
//         mouseLeave = true;
// })
// boxContainer.addEventListener('mousedown', function() {
//     event.target.style.backgroundColor =
// })

// })
