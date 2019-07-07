var cx = document.querySelector("canvas").getContext("2d");
var rects = [];

for(var i=0;i<450;i+=30) {
  for(var j=0;j<450;j+=30) {
    var obj = {x: j, y: i, w: 30, h: 30, col: 'white', hovercol:'lightgrey'};
    rects.push(obj)
  }
}

var _i,_b;

function renderBoard(hover, id) {
  var num = 1;
  for(_i=0;_b=rects[_i];_i++ ) {
    // console.log(hover,id,_i)
    cx.fillStyle = (hover && id === _i) ? _b.hovercol:_b.col;
    cx.fillRect(_b.x,_b.y,_b.w,_b.h);
    cx.lineWidth = 2;
    cx.strokeRect(_b.x,_b.y,_b.w,_b.h)

    cx.font = "10px Arial";
    cx.fillStyle = "black"
    if(_b.col != "black"){
      // console.log(rects[_i].x/30)
      if(rects[_i-1] && rects[_i-1].col == "black") {
        cx.fillText(num++,_b.x + 2,_b.y + 9.5)
      }
      else if(rects[_i-15] && rects[_i-15].col == "black") {
        cx.fillText(num++,_b.x + 2,_b.y + 9.5)
      }
      else if(_b.x/30 == 0 || _b.y/30 == 0) {
        cx.fillText(num++,_b.x + 2,_b.y + 9.5)
      }
    }
  }
}

renderBoard(false);

canvas.onmousemove = function(e) {
  var r = canvas.getBoundingClientRect(),
      x = e.clientX - r.left,
      y = e.clientY - r.top,
      hover = false;

  cx.clearRect(0,0,canvas.width,canvas.height)

  for(var i=rects.length - 1,b;b = rects[i]; i--) {
    if(x >= b.x && x <= b.x + b.w &&
       y >= b.y && y <= b.y + b.h) {
        // console.log(x,y)
        hover = true;
        id = i;
        break;
    }
  }
  renderBoard(hover,id);
}

canvas.addEventListener('contextmenu',function(e) {
  e.preventDefault();
  var r = canvas.getBoundingClientRect(),
      x = e.clientX - r.left,
      y = e.clientY - r.top,
      hover = false;

  cx.clearRect(0,0,canvas.width,canvas.height)

  for(var i=rects.length - 1,b;b = rects[i]; i--) {
    if(x >= b.x && x <= b.x + b.w &&
       y >= b.y && y <= b.y + b.h) {

        // console.log(x,y)

        if(rects[i].col == 'black') {
          rects[i].col = 'white'
          rects[i].hovercol = 'lightgrey'
        }
        else {
          rects[i].col = 'black'
          rects[i].hovercol = 'grey'
        }

        hover = true;
        id = i;
        break;
    }
  }
  renderBoard(hover,id);
},false)
