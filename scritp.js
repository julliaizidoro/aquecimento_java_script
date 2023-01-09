var jogador = null;
var ganhador = null;
var jogador_selecionado = document.getElementById("jogador-selecionado");
var ganhador_selecionado = document.getElementById("ganhador");

//VALOR DO JOGADOR QUE COMEÇA
mudarJogador("X");

//CAPTURA E MARCA QUADRADO
function escolherQuadrado(id) {
  let quadrado = document.getElementById(id);
  //Verifica se o quadrado já foi escolhido para nao mudar um quadrado já selecionado

  if (quadrado.innerHTML !== "-") {
    return;
  }
  quadrado.innerHTML = jogador;
  quadrado.style.color = "#000";

  //MUDA O JOGADOR
  if (jogador === "X") {
    jogador = "O";
  } else {
    jogador = "X";
  }
  mudarJogador(jogador);
  checarGanhador();
}

//MUDAR O TEXTO DO JOGADOR NO HTML
function mudarJogador(valor) {
  jogador = valor;
  jogador_selecionado.innerHTML = jogador;
}

//CONFERIR SE ALGUÉM JÁ GANHOU
function checarGanhador() {
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);

  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarGanhador(quadrado1);
    return;
  }

  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarGanhador(quadrado4);
    return;
  }

  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarGanhador(quadrado7);
    return;
  }

  if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
    mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarGanhador(quadrado1);
    return;
  }

  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarGanhador(quadrado2);
    return;
  }

  if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarGanhador(quadrado3);
    return;
  }

  if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarGanhador(quadrado1);
    return;
  }

  if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarGanhador(quadrado3);
  }
}

function mudarGanhador(quadrado) {
  ganhador = quadrado.innerHTML;
  ganhador_selecionado.innerHTML = ganhador;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = "#0f0";
  quadrado2.style.background = "#0f0";
  quadrado3.style.background = "#0f0";
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
  var eigual = false;

  if (
    quadrado1.innerHTML !== "-" &&
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    eigual = true;
  }

  return eigual;
}

function reiniciar() {
  for (let i = 0; i <= 9; i++) {
   var limpar = document.getElementById(i);
   console.log({limpar})

    limpar.innerHTML = "-";
    limpar.style.color = "#eee";
  }
}
