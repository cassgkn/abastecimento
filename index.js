
function calcularCombustivel() {
    var valorEtanol = parseFloat(document.getElementById('valorEtanol').value);
    var valorGasolina = parseFloat(document.getElementById('valorGasolina').value);
    
    if (isNaN(valorEtanol) || isNaN(valorGasolina)) {
      document.getElementById('resultado').innerHTML = 'Por favor, digite valores válidos para o Etanol e a Gasolina.';
      return;
    }
    
    
    var razao = (valorEtanol / valorGasolina) * 100;
    if (razao <= 70) {
      document.getElementById('resultado').innerHTML = `Abasteça com Etanol, essa é a melhor opção!`;
    } else {
      document.getElementById('resultado').innerHTML = `Abasteça com Gasolina, essa é a melhor opção!`;
    }
  }

  