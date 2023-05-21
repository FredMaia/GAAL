function gerar() {
  var qtdLinhas = document.getElementById("qtdLinhas").valueAsNumber;
  var qtdColunas = document.getElementById("qtdColunas").valueAsNumber;

  if (qtdLinhas == qtdColunas) {
    const field = document.getElementById("field");
    for (var i = 1; i <= qtdLinhas; i++) {
      for (var j = 1; j <= qtdColunas; j++) {
        var inputField = document.createElement("input");
        field.appendChild(inputField);
        var classe = "a" + i + j;
        inputField.setAttribute("id", classe);
        inputField.setAttribute("type", "number");
      }
      var breakLine = document.createElement("br");
      field.appendChild(breakLine);
    }
  } else {
    alert("Invalid input");
  }
}

function calcular() {
  var qtdLinhas = document.getElementById("qtdLinhas").valueAsNumber;
  var qtdColunas = document.getElementById("qtdColunas").valueAsNumber;
  var M = [];
  var linha = [];
  if (qtdLinhas == qtdColunas) {
    for (var i = 1; i <= qtdLinhas; i++) {
      linha = [];
      for (var j = 1; j <= qtdColunas; j++) {
        var inputField = document.createElement("input");
        // var classe = "Ca" + i + j;
        // inputField.setAttribute("id", classe);
        // fieldC.appendChild(inputField);
        
        var classeNumeroA = "a" + i + j;
        var numeroA = document.getElementById(classeNumeroA).valueAsNumber;
        linha.push(numeroA);

        // document.getElementById(classe).defaultValue = numeroA + numeroB;
      }
      M.push(linha);
      // var breakLine = document.createElement("br");
      // fieldC.appendChild(breakLine);
    }
  }

  function det(M) {
    if (M.length == 2) {
      return M[0][0] * M[1][1] - M[0][1] * M[1][0];
    }
    var answer = 0;
    for (var i = 0; i < M.length; i++) {
      answer += Math.pow(-1, i) * M[0][i] * det(deleteRowAndColumn(M, i));
    }
    return answer;
  }

  function deleteRowAndColumn(M, index) {
    var temp = [];
    for (var i = 0; i < M.length; i++) {
      temp.push(M[i].slice(0));
    }
    temp.splice(0, 1);
    for (var i = 0; i < temp.length; i++) {
      temp[i].splice(index, 1);
    }
    return temp;
  }

  const field = document.getElementById("field");
  const field2 = document.getElementById("field2");
  var resultado = document.createElement("h2");
  resultado.textContent = "Determinante = " + det(M);
  field2.appendChild(resultado);
  

  console.log(M)
}
