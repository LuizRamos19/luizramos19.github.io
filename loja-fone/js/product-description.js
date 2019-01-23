// 1 - Ter a janela (browser) na tela
// 2 - Ter o HTML da mão
// 3 - Pegar o coração
// 4 - Pegar o clique do coração
// 5 - No momento que o user clicar, mostrar um ae na tela

const $heart = window.document.querySelector('.-heart');
const $stars = document.querySelectorAll('.star');
const positionLast = $stars.length - 1;

$stars.forEach(function($star, key) {
    $star.addEventListener('click', function() {
        handleStarClick($star, key);
    });
});

$heart.addEventListener('click', handleClick);

function handleClick() {
    this.classList.toggle('-active');
}

function handleStarClick($star, key) {
    let i = key + 1;
    for (i; i <= $stars.length - 1; i++) {
        $stars[i].classList.remove('-active');
    }
    for (i = 0; i < key; i++) {
        $stars[i].classList.add('-active');
    }
    $star.classList.toggle('-active');
}