function changeType(){
  document.querySelector('.password').type = 'text';
}
function checkInputs (n) {
  var email = $('.username').val();
  var password = $('.password').val();
  if(!email == `ariel.player.king@gmail.com`){
    return;
  }
  if(!password == Number){
    return;
  }
  window.open('file:///C:/Users/ariel/Documents/code/table.HTML')
}

 
