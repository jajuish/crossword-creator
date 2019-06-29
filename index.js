let cx = document.getElementById("canvas").getContext("2d");

for(var i=0;i<450;i+=30) {
  for(var j=0;j<450;j+=30) {
    cx.lineWidth = 2
    cx.strokeRect(i,j,30,30)
    
  }
}



document.write("hi");
