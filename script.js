function gerarPA() {
  const primeiro = parseInt(document.getElementById("primeiro").value);
  const razao = parseInt(document.getElementById("razao").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  let resultado = "";

  for (let i = 0; i < quantidade; i++) {
    const termo = primeiro + i * razao;
    resultado += termo + (i < quantidade - 1 ? ", " : "");
  }

  document.getElementById("resultado").innerText = resultado;
}

function calcularSomaPA() {
  const primeiro = parseInt(document.getElementById("primeiro").value);
  const razao = parseInt(document.getElementById("razao").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  // Fórmula da soma dos n primeiros termos da PA: S = n/2 * (2a1 + (n-1)r)
  const soma = (quantidade / 2) * (2 * primeiro + (quantidade - 1) * razao);

  document.getElementById("somaPA").innerHTML =
    "<strong style='color: #000;'>Soma dos termos:</strong> " + soma;
}
