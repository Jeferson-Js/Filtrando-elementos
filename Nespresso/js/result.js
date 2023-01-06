const result = document.querySelector('#descricao');
const qtProduto = document.querySelector('#qtProduto');
const valorTotal = document.querySelector('#valorTotal');
const valorCapsula = 0;
result.innerHTML =`<p><strong>Descrição da compra</strong></p> ${sessionStorage.descricao} <strong> ${sessionStorage.valor}</strong>`;
qtProduto.addEventListener('change', calculaValorTotalCompra);
valorCapsula.sessionStorage.valor;
valorCapsula = valorCapsula.replaceAll('R$', '');

function calculaValorTotalCompra() {
    valorCapsula = Number(valorCapsula);
    valorTotal = valorCapsula*qtProduto.value;
    valorTotal.innerHTML = `<p><strong>Valor total da compra:</strong></p> <strong>R$ ${valorTotal} </strong>` 
}