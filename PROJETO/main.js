const formulario = document.getElementById("calcForm");
const listaItens = document.getElementById("listaItens");
const subtotalElemento = document.getElementById("subtotal");
const descontoElemento = document.getElementById("valorDesconto");
const resultadoElemento = document.getElementById("resultado");

let subtotal = 0;

function calcularTotal() {
    let percentualDesconto = 0;

    if (subtotal > 2006) {
        percentualDesconto = 0.10;
    } else if (subtotal > 100) {
        percentualDesconto = 0.05;
    }

    const valorDesconto = subtotal * percentualDesconto;
    const totalFinal = subtotal - valorDesconto;

    subtotalElemento.textContent = subtotal.toFixed(2);
    descontoElemento.textContent = valorDesconto.toFixed(2);
    resultadoElemento.textContent = totalFinal.toFixed(2);
}

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const produto = document.getElementById("produto").value;
    const quantidade = Number(
        document.getElementById("quantidade").value
    );
    const preco = Number(
        document.getElementById("preco").value
    );

    const totalItem = quantidade * preco;

    subtotal += totalItem;

    const item = document.createElement("li");

    item.textContent =
        produto + " - " +
        quantidade + " x R$ " +
        preco.toFixed(2) + " = R$ " +
        totalItem.toFixed(2);

    listaItens.appendChild(item);

    calcularTotal();

    formulario.reset();
});

