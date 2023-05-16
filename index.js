
function calcularCombustivel() {
    var valorEtanol = parseFloat(document.getElementById('valorEtanol').value);
    var valorGasolina = parseFloat(document.getElementById('valorGasolina').value);
    
    if (isNaN(valorEtanol) || isNaN(valorGasolina)) {
      document.getElementById('resultado').innerHTML = 'Por favor, digite valores válidos para o Etanol e a Gasolina.';
      return;
    }
    
    
    var razao = (valorEtanol / valorGasolina) * 100;
    if (razao <= 70) {
      document.getElementById('resultado').innerHTML = `Abasteça com Etanol! Pois a diferença está c/ ${razao.toFixed(0)}% menor ou igual em relação c/ o preço da Gasolina.`;
    } else {
      document.getElementById('resultado').innerHTML = `Não abasteça com Alcóol! Pois a diferença está c/ ${razao.toFixed(0)}% em relação c/ o preço da Gasolina.`;
    }
  }

  