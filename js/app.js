

/*creando el primer movimiento "X"*/
window.onload = function() {
  var board = document.querySelector('.board') ;
  board.addEventListener('click', addX); /*diciendole a board que se agregue un evento que hace que lo primero sea x*/
  document.getElementById('restart').addEventListener('click', startagain); /*agregandp un evento al ID restart que e sun boton*/
};
var centinel = true ;
function addX(event){
  if (event.target.matches('td')&& event.target.textContent==='') {
  if(centinel) /*esto es como para crear un switch de opciones, centinel no es centinel*/
    event.target.textContent = 'x';
   else
    event.target.textContent = '0';
    centinel =!centinel ;
  }
}

function startagain() {
  window.location.reload();
}
