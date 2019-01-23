let valorInicial = 10;
const $second = document.querySelector('.-second');

$second.addEventListener('click', handleCartClick);

function handleCartClick() {
    const $cartLink = window.document.querySelector('.action.-last');

    $cartLink.textContent = `Carrinho (${++valorInicial})`;
}