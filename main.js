function imc() {
    var peso = document.getElementById('peso').value
    var alt = document.getElementById('alt').value
    const resultado = document.getElementById('resultado-titulo')
    
    a = window.document.getElementById("resultado")
    var imc = (peso/(alt**2)).toFixed(2)

    if (imc < 18.5) {
              resultado.style.display = "block"
              a.innerHTML = `<div class="alert alert-danger" role="alert">
                             O seu IMC é ${imc} - Abaixo do peso
                             </div>`
    }
    if (imc >= 18.5 & imc <= 24.9){ 
          resultado.style.display = "block"
          a.innerHTML = `
                          <div class="alert alert-success" role="alert">
                          O seu IMC é ${imc} - Peso normal
                          </div><h5>Parabéns, seu IMC é ${imc} kg/m² e você está dentro do peso adequado!</h5>`
    }
    if (imc >= 25 & imc <= 29.9) {
        resultado.style.display = "block"
        a.innerHTML = `<div class="alert alert-warning" role="alert">
        O seu IMC é ${imc} - Sobrepeso
      </div><h5>Infelizmente, seu IMC é ${imc} kg/m² e você está fora do peso adequado!</h5>`
    }
    if (imc >= 30 & imc <= 34.9) {
      resultado.style.display = "block"
      a.innerHTML = `<div class="alert alert-danger" role="alert">
      O seu IMC é ${imc} - Obesidade grau 1
    </div><h5>Infelizmente, seu IMC é ${imc} kg/m² e você está fora do peso adequado!</h5>`
    }

    if (imc >= 35 & imc <= 39.9) {
        resultado.style.display = "block"
        a.innerHTML = `<div class="alert alert-danger" role="alert">
        O seu IMC é ${imc} - Obesidade grau 2
      </div><h5>Infelizmente, seu IMC é ${imc} kg/m² e você tem um grau de  obesidade!</h5>`
     }
    if (imc >= 40) {
      resultado.style.display = "block"
      a.innerHTML = `<div class="alert alert-danger" role="alert">
      O seu IMC é ${imc} - Obesidade mórbida
    </div>`
    }
    
  }

  function refresh () {
    document.location.reload(true)
  }