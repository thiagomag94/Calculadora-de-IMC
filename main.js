function imc() {
    var peso = document.getElementById('peso').value
    var alt = document.getElementById('alt').value
    
    a = window.document.getElementById("resultado")
    var imc = (peso/(alt**2)).toFixed(2)

    if (imc < 18.5) 

              a.innerHTML = `<div class="alert alert-primary" role="alert">
              O seu IMC é ${imc} - Abaixo do peso
            </div>`
    
    if (imc > 18.5 & imc < 24.9) 

          a.innerHTML = `<div class="alert alert-primary" role="alert">
          O seu IMC é ${imc} - Peso normal
        </div>`

    if (imc > 25 & imc < 29.9) 

        a.innerHTML = `<div class="alert alert-primary" role="alert">
        O seu IMC é ${imc} - Sobrepeso
      </div>`

    if (imc > 30 & imc < 34.9) 

      a.innerHTML = `<div class="alert alert-primary" role="alert">
      O seu IMC é ${imc} - Obesidade grau 1
    </div>`

    if (imc > 35 & imc < 39.9) 

        a.innerHTML = `<div class="alert alert-primary" role="alert">
        O seu IMC é ${imc} - Obesidade grau 2
      </div>`

    if (imc >= 40) 

      a.innerHTML = `<div class="alert alert-primary" role="alert">
      O seu IMC é ${imc} - Obesidade mórbida
    </div>`
    
  }