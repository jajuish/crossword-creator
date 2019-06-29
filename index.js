var cx = document.querySelector("canvas").getContext("2d");
var rects = [];

for(var i=0;i<450;i+=30) {
  for(var j=0;j<450;j+=30) {
    var obj = {x: i, y: j, w: 30, h: 30, col: 'white', hovercol:'lightgrey'};
    rects.push(obj)
  }
}

// cx.lineWidth = 2
// while(r = rects[counter++]) cx.strokeRect(r.x, r.y, r.w, r.h)
// console.log('hi')

var _i,_b;

function renderBoard(hover, id) {
  for(_i=0;_b=rects[_i];_i++ ) {
    console.log(hover,id,_i)
    cx.fillStyle = (hover && id === _i) ? _b.hovercol:_b.col;
    cx.fillRect(_b.x,_b.y,_b.w,_b.h);
    cx.lineWidth = 2;
    cx.strokeRect(_b.x,_b.y,_b.w,_b.h)
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
        console.log(x,y)
        hover = true;
        id = i;
        break;
    }
  }
  renderBoard(hover,id);
}

canvas.addEventListener('click',function(e) {
  var r = canvas.getBoundingClientRect(),
      x = e.clientX - r.left,
      y = e.clientY - r.top,
      hover = false;

  cx.clearRect(0,0,canvas.width,canvas.height)

  for(var i=rects.length - 1,b;b = rects[i]; i--) {
    if(x >= b.x && x <= b.x + b.w &&
       y >= b.y && y <= b.y + b.h) {

        console.log(x,y)

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
