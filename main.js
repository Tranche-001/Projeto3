
  //váriaveis
  const screen1 = document.querySelector(".screen1")
  const screen2 = document.querySelector(".screen2")
  const btnTry = document.querySelector('#btnTry')
  const btnReset = document.querySelector('#btnReset')
  let randomNumber = Math.round(Math.random() * 10)
  let xAttempts = 1
   

  //eventos
  btnTry.addEventListener('click', handleTryClick)
  btnReset.addEventListener('click', handleResetClick)
  document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})
  //funções

  // função callback. Função passada como argumento de outra função.
  // Vai executar depois de escutar o click
  function handleTryClick(event) {
    event.preventDefault()
  
    const inputNumber = document.querySelector('#inputNumber')
    //Por estar dentro de um formulário, ele resetar
    // ao colocar event.preventDefault(), ele impede issso
    //Input tem nada interno, onde está seu valor? todo input possui um atributo value
    if (Number(inputNumber.value) <0 || Number(inputNumber.value>10)){
      toggleScreen()
      screen2.querySelector('h2').innerText = "número inválido"
    }
    else if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
    }
  
    inputNumber.value = ''
    xAttempts++
  }


  function handleResetClick(event){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
  }

  function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
  }

