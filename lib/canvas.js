var bw = 600;
var bh = 600;
var p = 0;

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

function drawBoard(){

  for (var x = 0; x <= bw; x += 40) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, bh + p);
  }

  for (var x = 0; x <= bh; x += 40) {
    context.moveTo(p, 0.5 + x + p);
    context.lineTo(bw + p, 0.5 + x + p);
  }

  context.fillStyle = "red";
  context.fillRect(281,281, 39, 39);

  context.strokeStyle = "black";
  context.fillStyle = "black";
  context.stroke();
  context.font ="18pt Arial";
  context.fillText("A", 291, 311);


}

drawBoard();

// module.exports = drawBoard();