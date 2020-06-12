var slajder = document.getElementById('slajder')
var brojac = 1;
setInterval(function(){
  slajder.innerHTML = "<img src='../Galerija/"+brojac+".jpg'>";
  brojac++;
  if (brojac==22)
  brojac = 1;

},2000)
