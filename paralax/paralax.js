window.addEventListener('scroll', function (e) {
 
  var $parallax1 = document.getElementById('parallax1');
  var $parallax2 = document.getElementById('parallax2');
  var posY = document.body.scrollTop * 0.5;
  $parallax1.style.backgroundPosition = '0px '+posY+'px';
  $parallax2.style.backgroundPosition = '0px '+posY+'px';
})