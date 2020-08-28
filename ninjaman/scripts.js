var world = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,2,1,0,0,1],
  [1,0,1,0,1,0,0,0,1,1],
  [1,0,1,2,1,1,1,0,0,1],
  [1,0,1,0,0,1,0,0,1,1],
  [1,0,1,1,0,1,1,0,2,1],
  [1,2,1,0,0,0,0,0,1,1],
  [1,0,0,0,1,0,1,2,0,1],
  [1,1,1,1,1,1,1,1,1,1]
];

var worldDict = {
  0: "blank",
  1: "wall",
  2: "sushi"
}

var ninjaman = {
  x: 1,
  y: 1
}

function drawWorld() {
  var output = "";

  for(var row=0; row < world.length; row++) {
    output += "<div class='row'>";

    for (var col=0; col < world[row].length; col++) {
      output += `<div class='${worldDict[world[row][col]]}'></div>`;
    }
    output += "</div>";

  }

  document.getElementById("world").innerHTML = output;
}

function drawNinjaman() {
  document.getElementById("ninjaman").style.top = `${ninjaman.x * 40}px`;
  document.getElementById("ninjaman").style.left = `${ninjaman.y * 40}px`;
}

drawWorld();
drawNinjaman();

//READY

document.onkeydown = function(e) {
  if (e.keyCode == 37) { //move left
    if(world[ninjaman.x][ninjaman.y - 1] != 1) {
      ninjaman.y--;
    }
  } else if (e.keyCode == 39) { //move right
    if(world[ninjaman.x][ninjaman.y + 1] != 1) {
      ninjaman.y++;
    }
  } else if (e.keyCode == 40) { //move down
    if(world[ninjaman.x + 1][ninjaman.y] != 1) {
      ninjaman.x++;
    }
  } else if (e.keyCode == 38) { //move up
    if(world[ninjaman.x - 1][ninjaman.y] != 1) {
      ninjaman.x--;
    }
  }

  //clear sushi
  world[ninjaman.x][ninjaman.y] = 0;

  drawWorld();
  drawNinjaman();
}