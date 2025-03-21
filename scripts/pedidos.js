const produtos = new Map();
let totalGeral = 0;
function addProdutos() {
  let nome = document.getElementById("ProdutoNome").value.trim().toLowerCase();
  let quantidade = document.getElementById("QuantidadeProduto");
  if (nome === "") {
    alert("Preencha o nome do Produto");
    return;
  }

  let qtd = parseInt(quantidade.value);
  {
    if (isNaN(qtd) || qtd <= 0) {
      alert("Insira um valor válido");
      return;
    }
  }

  if (produtos.has(nome)) {
    produtos.set(nome, produtos.get(nome) + qtd);
  } else {
    produtos.set(nome, qtd);
  }

  totalGeral += qtd;
  refreshLista();

  document.getElementById("ProdutosNome").value = "";
  document.getElementById("QuantidadeProduto").value = "";
}

function refreshLista() {
  let lista = document.getElementById("ListaProdutos");
  lista.innerHTML = "";

  produtos.forEach((quantidade, nome) => {
    let li = document.createElement("li");
    li.textContent = `Nome - ${nome} - Quantia - ${quantidade}`;
    lista.appendChild(li);
  });
  let totalProdutos = document.getElementById("TotalGeral");
  let totalContainer = document.getElementById("totalContainer");
  if (totalGeral > 0) {
    totalProdutos.textContent = `Total: ${totalGeral}`;
    totalContainer.style.display = "block"
    totalContainer.style.backgroundColor ="#3e569a";
    ;
  } else {
    totalContainer.style.display = "none";
  }
}

function reset() {
  document.getElementById("ProdutoNome").value = "";
  document.getElementById("QuantidadeProduto").value = "";

  let lista = document.getElementById("ListaProdutos");
  if (lista) {
    lista.innerHTML = "";
  }

  let totalProdutos = document.getElementById("TotalGeral");
  if (totalProdutos) {
    totalProdutos.textContent = "Total: 0";
  }
  produtos.clear();
  totalGeral = 0;
  console.log("Resetado");
}
