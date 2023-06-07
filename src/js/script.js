document.getElementById('modo-texto-codificado').style.display = 'none';
document.querySelector('#logo-preta').style.display = "none";
document.querySelector('#icone-lua').style.display = "none";

var textarea = document.querySelector('textarea');
var buttonCripto = document.querySelector('#criptografar');
var buttonDescri = document.querySelector('#descriptografar');
var finalText = document.querySelector('#texto_final');
var buttonCopiar = document.querySelector('#copiar');
var buttonTema = document.querySelector('.botao-tema-DN');
var diurno = true;

function testeVazio(text) {
  return text.replace(/\s/g, '').length;
}

function criptografar() {
  var newText = "";
  var subText = [];

  var tamanho = testeVazio(textarea.value);

  if (tamanho != 0) {
    var text = textarea.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    text = text.toLowerCase();

    for (var i = 0; i < text.length; i++) {
      subText[i] = text[i];
    }

    for (var i = 0; i < subText.length; i++) {
      if (subText[i] == "e") {
        subText[i] = "enter";
      } else if (subText[i] == "i") {
        subText[i] = "imes";
      } else if (subText[i] == "a") {
        subText[i] = "ai";
      } else if (subText[i] == "o") {
        subText[i] = "ober";
      } else if (subText[i] == "u") {
        subText[i] = "ufat";
      }
    }

    for (var i = 0; i < subText.length; i++) {
      newText = newText + subText[i];
    }

    document.getElementById('modo-texto-codificado').style.display = "inline-block";
    document.getElementById('modo-sem-texto').style.display = 'none';

    finalText.textContent = newText;
    textarea.value = "";
  }
}

function descriptografar() {
  var tamanho = testeVazio(textarea.value);

  if (tamanho != 0) {
    var newText = textarea.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    newText = newText.toLowerCase();
    newText = newText.replace(/ai/gi, "a");
    newText = newText.replace(/enter/gi, "e");
    newText = newText.replace(/ober/gi, "o");
    newText = newText.replace(/imes/gi, "i");
    newText = newText.replace(/ufat/gi, "u");
    finalText.textContent = newText;
    textarea.value = "";

    document.getElementById('modo-texto-codificado').style.display = "inline-block";
    document.getElementById('modo-sem-texto').style.display = 'none';
  }
}

function modoDiurno() {
  document.querySelector('#icone-sol').style.display = 'inline-block';
  document.querySelector('#icone-lua').style.display = 'none';
  document.querySelector('#logo-branca').style.display = "inline-block";
  document.querySelector('#logo-preta').style.display = "none";

  document.querySelector('header').style.background = "#5586c2";
  document.querySelector('header').style.boxShadow = '0 10px 10px 0 #ced1d4'
  document.querySelector('body').style.background = "#e6e9ec";
  document.querySelector('textarea').style.color = '#0A3871';
  document.querySelector('.saida-de-texto').style.background = "#FFFFFF";
  document.querySelector('#modo-sem-texto').style.color = "#495057";
  document.querySelector('#nenhuma-mensagem').style.color = '#343A40';
  document.querySelector('#texto_final').style.background = '#FFFFFF';
  document.querySelector('#texto_final').style.color = '#495057';
  document.querySelector('.botoes button').style.border = '1px solid #0A3871';
  document.querySelector('#descriptografar').style.border = '1px solid #0A3871';
  document.querySelector('#criptografar').style.background = '#0A3871';
  document.querySelector('#descriptografar').style.background = 'none';
  document.querySelector('#descriptografar').style.color = '#0A3871';
  document.querySelector('#copiar').style.background = 'none';
  document.querySelector('#copiar').style.border = '1px solid #0A3871';
  document.querySelector('#copiar').style.color = '#0A3871';
  document.querySelector('#criptografar').style.boxShadow = '5px 5px 10px 0 #b7babd';
  document.querySelector('#descriptografar').style.boxShadow = '5px 5px 10px 0 #b7babd';
  document.querySelector('#copiar').style.boxShadow = '5px 5px 10px 0 #b7babd';
  document.querySelector('.saida-de-texto').style.boxShadow = '5px 5px 10px 0 #ced1d4';
  document.querySelector('#criptografar').addEventListener('mouseover', function () {
    document.querySelector('#criptografar').style.background = '#0A3871';
  })
  document.querySelector('#criptografar').addEventListener('mouseout', function () {
    document.querySelector('#criptografar').style.background = '#0A3871';
  })
  document.querySelector('#descriptografar').addEventListener('mouseover', function () {
    document.querySelector('#descriptografar').style.background = 'none';
  })
  document.querySelector('#descriptografar').addEventListener('mouseout', function () {
    document.querySelector('#descriptografar').style.background = 'none';
  })
  document.querySelector('#copiar').addEventListener('mouseover', function () {
    document.querySelector('#copiar').style.background = '#none';
  })
  document.querySelector('#copiar').addEventListener('mouseout', function () {
    document.querySelector('#copiar').style.background = '#none';
  })

  document.querySelector('footer').style.background = '#5586c2';
  document.querySelector('footer').style.color = '#FFFFFF';
  document.querySelector('.footer__logo').style.color = '#FFFFFF';
}

function modoNoturno() {
  document.querySelector('#icone-sol').style.display = 'none';
  document.querySelector('#icone-lua').style.display = 'inline-block';
  document.querySelector('#logo-branca').style.display = "none";
  document.querySelector('#logo-preta').style.display = "inline-block";

  document.querySelector('header').style.background = "#e6e9ec";
  document.querySelector('header').style.boxShadow = '0 10px 10px 0 #383D42'
  document.querySelector('body').style.background = "#495057";
  document.querySelector('textarea').style.color = '#FFFFFF';
  document.querySelector('.entrada').style.color = '#FFFFFF';
  document.querySelector('.saida-de-texto').style.background = "#343A40";
  document.querySelector('#modo-sem-texto').style.color = "#FFFFFF";
  document.querySelector('#nenhuma-mensagem').style.color = '#FFFFFF';
  document.querySelector('#texto_final').style.background = '#343A40';
  document.querySelector('#texto_final').style.color = '#FFFFFF';
  document.querySelector('.botoes button').style.border = '1px solid #FFFFFF';
  document.querySelector('#descriptografar').style.border = '1px solid #FFFFFF';
  document.querySelector('#descriptografar').style.background = '#0A3871';
  document.querySelector('#descriptografar').style.color = '#FFFFFF';
  document.querySelector('#criptografar').style.background = 'none';
  document.querySelector('#copiar').style.background = 'none';
  document.querySelector('#copiar').style.border = '1px solid #FFFFFF';
  document.querySelector('#copiar').style.color = '#FFFFFF';
  document.querySelector('#criptografar').style.boxShadow = '5px 5px 10px 0 #383D42';
  document.querySelector('#descriptografar').style.boxShadow = '5px 5px 10px 0 #383D42';
  document.querySelector('#copiar').style.boxShadow = '5px 5px 10px 0 #262A2E';
  document.querySelector('.saida-de-texto').style.boxShadow = '5px 5px 10px 0 #3F454B';
  document.querySelector('#criptografar').addEventListener('mouseover', function () {
    document.querySelector('#criptografar').style.background = 'rgba(255, 255, 255, 25%)';
  })
  document.querySelector('#criptografar').addEventListener('mouseout', function () {
    document.querySelector('#criptografar').style.background = 'none';
  })
  document.querySelector('#descriptografar').addEventListener('mouseover', function () {
    document.querySelector('#descriptografar').style.background = '#0A3871';
  })
  document.querySelector('#descriptografar').addEventListener('mouseout', function () {
    document.querySelector('#descriptografar').style.background = '#0A3871';
  })
  document.querySelector('#copiar').addEventListener('mouseover', function () {
    document.querySelector('#copiar').style.background = 'rgba(255, 255, 255, 25%)';
  })
  document.querySelector('#copiar').addEventListener('mouseout', function () {
    document.querySelector('#copiar').style.background = 'none';
  })

  document.querySelector('footer').style.background = '#e6e9ec';
  document.querySelector('footer').style.color = '#000000';
  document.querySelector('.footer__logo').style.color = '#000000';
}

function toggleTema() {
  if (diurno) {
    modoNoturno();
  } else {
    modoDiurno();
  }
  diurno = !diurno;
}

function copiarTexto() {
  const textcopy = finalText.innerHTML;
  navigator.clipboard.writeText(textcopy);
}

function criptografar() {
  let text = textarea.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  let subText = [];

  if (text.length !== 0) {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "e") {
        subText[i] = "enter";
      } else if (text[i] === "i") {
        subText[i] = "imes";
      } else if (text[i] === "a") {
        subText[i] = "ai";
      } else if (text[i] === "o") {
        subText[i] = "ober";
      } else if (text[i] === "u") {
        subText[i] = "ufat";
      } else {
        subText[i] = text[i];
      }
    }

    let newText = subText.join("");
    finalText.textContent = newText;
    textarea.value = "";
    document.getElementById('modo-texto-codificado').style.display = "inline-block";
    document.getElementById('modo-sem-texto').style.display = 'none';
  }
}

function descriptografar() {
  let text = textarea.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  let newText = text.replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/ober/gi, "o")
    .replace(/imes/gi, "i")
    .replace(/ufat/gi, "u");

  finalText.textContent = newText;
  textarea.value = "";
  document.getElementById('modo-texto-codificado').style.display = "inline-block";
  document.getElementById('modo-sem-texto').style.display = 'none';
}

buttonCripto.addEventListener('click', criptografar);
buttonDescri.addEventListener('click', descriptografar);
buttonCopiar.addEventListener('click', copiarTexto);
buttonTema.addEventListener('click', toggleTema);
