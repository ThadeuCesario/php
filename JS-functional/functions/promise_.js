
setTimeout(function() {
  console.log('Execuando callback......');

  setTimeout(function() {
    console.log('Execuando callback......');

    setTimeout(function(){
      console.log('Execuando callback......');

    }, 2000)
  }, 2000)
}, 2000);

function esperarPor(tempo = 2000) {
  return Promise(function(resolve){
    setTimeout(function(){
      console.log('Executando promise...');
      resolve('Teste'); 
    }, tempo);
  });
}

esperarPor(3000).then(texto => console.log(texto));