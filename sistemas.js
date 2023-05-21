function gerar() {
  var qtdVariaveis = document.getElementById("qtdVariaveis").valueAsNumber;

  const field = document.getElementById("field");
  for (var i = 1; i <= qtdVariaveis; i++) {
    for (var j = 1; j <= qtdVariaveis + 1; j++) {
      if (j == qtdVariaveis + 1) {
        var equalSign = document.createElement("span");
        equalSign.textContent = "=";
        field.appendChild(equalSign);
      } else if (j != 1) {
        var sumSign = document.createElement("span");
        sumSign.textContent = "+";
        field.appendChild(sumSign);
      }

      var inputField = document.createElement("input");
      field.appendChild(inputField);
      var classe = "a" + i + j;
      inputField.setAttribute("id", classe);
      inputField.setAttribute("type", "number");
    }
    var breakLine = document.createElement("br");
    field.appendChild(breakLine);
  }
}

function calcular() {
  var qtdVariaveis = document.getElementById("qtdVariaveis").valueAsNumber;

  var matrizD = [];
  var linha = [];
  //Defining D.
  for (var i = 1; i <= qtdVariaveis; i++) {
    linha = [];
    for (var j = 1; j <= qtdVariaveis; j++) {
      var classeNumeroA = "a" + i + j;
      var numeroA = document.getElementById(classeNumeroA).valueAsNumber;
      linha.push(numeroA);
    }
    matrizD.push(linha);
  }

  var Ds = [];
  //Defining the matrices D of the variables.
  for (var x = 1; x <= qtdVariaveis; x++) {
    matrizAlterada = [];
    for (var i = 1; i <= qtdVariaveis; i++) {
      linha = [];
      for (var j = 1; j <= qtdVariaveis; j++) {
        if (j == x) {
          var classeNumeroA = "a" + i + (qtdVariaveis + 1);
          var numeroA = document.getElementById(classeNumeroA).valueAsNumber;
          linha.push(numeroA);
        } else {
          var classeNumeroA = "a" + i + j;
          var numeroA = document.getElementById(classeNumeroA).valueAsNumber;
          linha.push(numeroA);
        }
      }
      matrizAlterada.push(linha);
    }
    Ds.push(matrizAlterada);
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

  //Se D = 0 =>
  // x = Dx/D, y = Dy/D, z = Dz/D...
  // var D = det(M);
  const field = document.getElementById("field");
  const field2 = document.getElementById("field2");
  var resultado = document.createElement("h2");

  var D = det(matrizD);
  var solutions = [];
  //Calculating each D of each variable:
  if (D == 0) {
    resultado.textContent = "Sistema impossível ou infinitas soluções";
    field2.appendChild(resultado);
  } else {
    for (var i = 0; i < Ds.length; i++) {
      solutions.push(det(Ds[i]) / D);
    }
    resultado.textContent = "Resultado: (" + solutions + ")";
    field2.appendChild(resultado);
  }
}
