//-------------------------------------------OPERAÇÕES----------------------------------
document.getElementById("inputIntNumber").style.visibility = "hidden";
document.getElementById("inputIntNumber").style.position = "absolute";
document.getElementById("inputIntNumber").style.left = "-999px";
function changed() {
  var operator = document.getElementById("operator").value;

  if (operator == "inteiro") {
    document.getElementById("matrizB").style.visibility = "hidden";
    document.getElementById("matrizB").style.position = "absolute";
    document.getElementById("matrizB").style.left = "-999px";
    document.getElementById("inputIntNumber").style.visibility = "visible";
    document.getElementById("inputIntNumber").style.removeProperty("position");
  } else if (operator == "transposta" || operator == "inversa") {
    document.getElementById("matrizB").style.visibility = "hidden";
    document.getElementById("matrizB").style.position = "absolute";
    document.getElementById("matrizB").style.left = "-999px";
    document.getElementById("inputIntNumber").style.visibility = "hidden";
    document.getElementById("inputIntNumber").style.position = "absolute";
    document.getElementById("inputIntNumber").style.left = "-999px";

  } else {
    document.getElementById("matrizB").style.visibility = "visible";
    document.getElementById("matrizB").style.removeProperty("position");
    document.getElementById("inputIntNumber").style.visibility = "hidden";
    document.getElementById("inputIntNumber").style.position = "absolute";
    document.getElementById("inputIntNumber").style.left = "-999px";
  }
}

function gerar() {
  var qtdLinhasA = document.getElementById("qtdLinhasA").valueAsNumber;
  var qtdLinhasB = document.getElementById("qtdLinhasB").valueAsNumber;
  var qtdColunasA = document.getElementById("qtdColunasA").valueAsNumber;
  var qtdColunasB = document.getElementById("qtdColunasB").valueAsNumber;
  if (operator.value == "sum" || operator.value == "subtract") {
    //Verificar se a ordem das matrizes são iguais na subtração / adição
    if (
      qtdLinhasA == qtdLinhasB &&
      qtdLinhasB == qtdColunasB &&
      qtdLinhasA == qtdLinhasB
    ) {
      const fieldA = document.getElementById("fieldA");
      const fieldB = document.getElementById("fieldB");

      //Criando inputs para digitar números da matriz A:
      var matrizATexto = document.createElement("h2");
      matrizATexto.textContent = "Matriz A";
      fieldA.appendChild(matrizATexto);
      for (var i = 1; i <= qtdLinhasA; i++) {
        for (var j = 1; j <= qtdColunasA; j++) {
          var inputField = document.createElement("input");
          fieldA.appendChild(inputField);
          var classe = "Aa" + i + j;
          inputField.setAttribute("id", classe);
          inputField.setAttribute("type", "number");
        }
        var breakLine = document.createElement("br");
        fieldA.appendChild(breakLine);
      }

      //Criando inputs para digitar números da matriz B:
      var matrizBTexto = document.createElement("h2");
      matrizBTexto.textContent = "Matriz B";
      fieldB.appendChild(matrizBTexto);
      for (var i = 1; i <= qtdLinhasB; i++) {
        for (var j = 1; j <= qtdColunasB; j++) {
          var inputField = document.createElement("input");
          fieldB.appendChild(inputField);
          var classe = "Ba" + i + j;
          inputField.setAttribute("id", classe);
          inputField.setAttribute("type", "number");
        }
        var breakLine = document.createElement("br");
        fieldB.appendChild(breakLine);
      }
    } else {
      alert("Invalid input!");
    }
  }

  if (operator.value == "multiplication") {
    if (qtdColunasA == qtdLinhasB) {
      const fieldA = document.getElementById("fieldA");
      const fieldB = document.getElementById("fieldB");

      //Criando inputs para digitar números da matriz A:
      var matrizATexto = document.createElement("h2");
      matrizATexto.textContent = "Matriz A";
      fieldA.appendChild(matrizATexto);
      for (var i = 1; i <= qtdLinhasA; i++) {
        for (var j = 1; j <= qtdColunasA; j++) {
          var inputField = document.createElement("input");
          fieldA.appendChild(inputField);
          var classe = "Aa" + i + j;
          inputField.setAttribute("id", classe);
          inputField.setAttribute("type", "number");
        }
        var breakLine = document.createElement("br");
        fieldA.appendChild(breakLine);
      }

      //Criando inputs para digitar números da matriz B:
      var matrizBTexto = document.createElement("h2");
      matrizBTexto.textContent = "Matriz B";
      fieldB.appendChild(matrizBTexto);
      for (var i = 1; i <= qtdLinhasB; i++) {
        for (var j = 1; j <= qtdColunasB; j++) {
          var inputField = document.createElement("input");
          fieldB.appendChild(inputField);
          var classe = "Ba" + i + j;
          inputField.setAttribute("id", classe);
          inputField.setAttribute("type", "number");
        }
        var breakLine = document.createElement("br");
        fieldB.appendChild(breakLine);
      }
    } else {
      alert("Invalid input.");
    }
  }

  if (operator.value == "transposta" || operator.value == "inversa" || operator.value == "inteiro") {
    const fieldA = document.getElementById("fieldA");

    //Criando inputs para digitar números da matriz A:
    var matrizATexto = document.createElement("h2");
    matrizATexto.textContent = "Matriz A";
    fieldA.appendChild(matrizATexto);
    for (var i = 1; i <= qtdLinhasA; i++) {
      for (var j = 1; j <= qtdColunasA; j++) {
        var inputField = document.createElement("input");
        fieldA.appendChild(inputField);
        var classe = "Aa" + i + j;
        inputField.setAttribute("id", classe);
        inputField.setAttribute("type", "number");
      }
      var breakLine = document.createElement("br");
      fieldA.appendChild(breakLine);
    }
  }
}

function calcular() {
  var qtdLinhasA = document.getElementById("qtdLinhasA").valueAsNumber;
  var qtdLinhasB = document.getElementById("qtdLinhasB").valueAsNumber;
  var qtdColunasA = document.getElementById("qtdColunasA").valueAsNumber;
  var qtdColunasB = document.getElementById("qtdColunasB").valueAsNumber;
  const fieldC = document.getElementById("fieldC");
  var matrizCTexto = document.createElement("h2");
  matrizCTexto.textContent = "Resultado";
  fieldC.appendChild(matrizCTexto);
  //Calcular soma / subtração com estrutura de repetição
  if (operator.value == "sum") {
    for (var i = 1; i <= qtdLinhasA; i++) {
      for (var j = 1; j <= qtdColunasA; j++) {
        var inputField = document.createElement("input");
        var classe = "Ca" + i + j;
        inputField.setAttribute("id", classe);
        fieldC.appendChild(inputField);

        var classeNumeroA = "Aa" + i + j;
        var numeroA = document.getElementById(classeNumeroA).valueAsNumber;
        var classeNumeroB = "Ba" + i + j;
        var numeroB = document.getElementById(classeNumeroB).valueAsNumber;

        document.getElementById(classe).defaultValue = numeroA + numeroB;
      }
      var breakLine = document.createElement("br");
      fieldC.appendChild(breakLine);
    }
  }
  if (operator.value == "subtract") {
    for (var i = 1; i <= qtdLinhasA; i++) {
      for (var j = 1; j <= qtdColunasA; j++) {
        var inputField = document.createElement("input");
        var classe = "Ca" + i + j;
        inputField.setAttribute("id", classe);
        fieldC.appendChild(inputField);

        var classeNumeroA = "Aa" + i + j;
        var numeroA = document.getElementById(classeNumeroA).valueAsNumber;
        var classeNumeroB = "Ba" + i + j;
        var numeroB = document.getElementById(classeNumeroB).valueAsNumber;

        document.getElementById(classe).defaultValue = numeroA - numeroB;
      }
      var breakLine = document.createElement("br");
      fieldC.appendChild(breakLine);
    }
  }

  var n = 0;
  if (operator.value == "multiplication") {
    //criar inputs do resultado
    for (var i = 1; i <= qtdLinhasA; i++) {
      for (var j = 1; j <= qtdColunasB; j++) {
        n = 0;
        var inputField = document.createElement("input");
        var classe = "Ca" + i + j;
        inputField.setAttribute("id", classe);
        fieldC.appendChild(inputField);
      }
      var breakLine = document.createElement("br");
      fieldC.appendChild(breakLine);
    }

    //Calculando multiplicações
    for (var i = 1; i <= qtdLinhasA; i++) {
      for (var j = 1; j <= qtdColunasB; j++) {
        n = 0;
        for (var k = 1; k <= qtdColunasA; k++) {
          var classe = "Ca" + i + j;

          var classeNumeroA = "Aa" + i + k;
          var numeroA = document.getElementById(classeNumeroA).valueAsNumber;

          var classeNumeroB = "Ba" + k + j;
          var numeroB = document.getElementById(classeNumeroB).valueAsNumber;

          n += numeroB * numeroA;
          document.getElementById(classe).defaultValue = n;
        }
      }
    }
  }

  if (operator.value == "inteiro") {
    var inteiro = document.getElementById("inteiro").valueAsNumber;
    for (var i = 1; i <= qtdLinhasA; i++) {
      for (var j = 1; j <= qtdColunasA; j++) {
        var inputField = document.createElement("input");
        var classe = "Ca" + i + j;
        inputField.setAttribute("id", classe);
        fieldC.appendChild(inputField);

        var classeNumeroA = "Aa" + i + j;
        var numeroA = document.getElementById(classeNumeroA).valueAsNumber;

        document.getElementById(classe).defaultValue = numeroA * inteiro;
      }
      var breakLine = document.createElement("br");
      fieldC.appendChild(breakLine);
    }
  }

  if (operator.value == "transposta") {
    for (var i = 1; i <= qtdLinhasA; i++) {
      for (var j = 1; j <= qtdColunasA; j++) {
        var inputField = document.createElement("input");
        var classe = "Ca" + i + j;
        inputField.setAttribute("id", classe);
        fieldC.appendChild(inputField);

        var classeNumeroA = "Aa" + j + i;
        var numeroA = document.getElementById(classeNumeroA).valueAsNumber;

        document.getElementById(classe).defaultValue = numeroA;
      }
      var breakLine = document.createElement("br");
      fieldC.appendChild(breakLine);
    }
  }

  if (operator.value == "inversa") {
    alert("Em desenvolvimento")
    //Se o determinante for 0, não há inversa
  }
}

//-------------------------------------------DETERMINANTES----------------------------------

//-------------------------------------------SISTEMAS----------------------------------
