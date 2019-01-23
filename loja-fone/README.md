# HTML5

Linguagem de marcação possui as seguintes responsabilidades:

- Conteúdo;
- Semântico (tags);

- `<h1>` - heading 1 - 6
  Usamos esta tag quando queremos definir títulos

- `a` - Tag de link (a - anchor), definir navegação do user

- `<nav>` - Tag para informar que o contexto dentro delaé uma navegação, dinsponível apenas no HTML 5

# CSS

É uma linguagem de estilo, significa que ela possui as seguintes responsabilidades:

- Visual

Para deixar o estilo da página igual para todos os browsers, é preciso setar atributos adicionais de CSS para padronizar o layout em todas as páginas. Existem duas alternativas, o reset css desenvolvido pelo _`Erick Meyer`_ ou o _`Normalize`_.

`Herança de atributos de estilo`

Quando quisermos que mais de um componente possua o mesmo atributo, como por exemplo a mesma cor, podemos adicionar esse atributo em um componente pai, e herdar esse estilo em um componente filho. No exemplo de um link, a tag _`<a link>`_ possui seu próprio estilo de cor, agora se quisermos que essa tag utilize o atributo de um componente pai, basta adicionarmos o estilo abaixo na tag _`<a link`_, isso significa que ele herda a propriedade de um componente pai.
```
color: inherit;
```

`Font-family`

As famílias das fontes precisam ser sempre acompanhadas de mais de um tipo para que o layout possa ter o design mais parecido em todos os sistemas operacionais, por exemplo a fonte Arial existe apenas no Windows.
```
font-family: 'Arial', 'Roboto', sans-serif;
```

Tem como fazer download de fontes direto do site do google também. E para utilizado é só criar uma fonte estilizada e colar como primeiro link href da tag _`<head>`_.
- [Site das fontes](https://fonts.google.com/ "Clique e acesse agora!")

`Float`

O atributo _`float`_ cria um novo contexto no browser, e todos os elementos que não são setados como float permanecem no mesmo contexto em que estão (antigo). O pai não enxerga os componentes que estão como float. O float possui as seguintes características:

- Cria um novo contexto;
- Os elementos ocupam o lugar do antigo componente, entretando o conteúdo não é escondido, sempre fica do lado do componente que está com float;
- O width e height do componente dimensiona de acordo com o conteúdo do conteúdo;

Para forçar com que o browser recalcule o contexto para que possa enxergar os componentes que estão com float dentro dele, é necessário inserir a propriedade abaixo do componente pai.
```
overflow: hidden;
```

A propriedade acima limita o conteúdo do componente ao width e height máximo do componente. Sem essa propriedade, o conteúdo sempre será exibido, ultrapassando até mesmo o width e height.

`Respiro externo`

Utilizado principalmente pelos designers quando querem informar que o layout precisa de uma margem. Serve para distanciar um elemento do outro. Para criar esses respiros externos basta selecionar as propriedades abaixo:
```
margin-left: 116px;
margin-right: 115px;
margin-top: 110px;
margin-bottom: 111px;

Formas reduzidas

/* margin: top right bottom left; */
margin: 110px 115px 111px 116px;

/* margin: top/bottom right/left; */
margin: 110px 115px;

/* margin: top right/left bottom; */
margin: 110px 115px 111px;

/* margin: top/bottom/right/left; */
margin: 110px;
```

`Respiro interno`

Segue os mesmos padrões do _`respiro externo`_ mas referente aos componentes que estão dentro do componente pai. Para isso basta adicionar as propriedades:
```
padding-left: 36px;
padding-right: 35px;
padding-top: 30px;
padding-bottom: 31px;

Formas reduzidas

/* padding: top right bottom left; */
padding: 30px 35px 31px 36px;

/* padding: top/bottom right/left; */
padding: 30px 35px;

/* padding: top right/left bottom; */
padding: 30px 35px 31px;

/* padding: top/bottom/right/left; */
padding: 31px;
```

`Alinhamento horizontal e vertical`

Para alinhar horizontalmente um texto, a propriedade _`text-align`_ faz isso. Entretanto, para alinhar os elementos verticalmente, mas apenas com uma linha de texto, como no caso dos botões, basta usar o _`line-height`_ e colocar o height no mesmo tamanho do height do botão.

```
text-align: center; // right, left, etc
line-height: 60px; // ou o mesmo height do botão

```

`Propriedade display`

O _`display inline`_ deixa os elementos na mesma linha, e não consegue definir o width e height. Essa propriedade também faz o elemento ter o comportamento de uma palavra, ou seja, conteúdo. (Esses elementos não funcionam com elementos que possuem display inline)
```
display: inline;
```

O _`display block`_ não deixa os elementos na mesma linha, mas permite mudar o width e height
```
display: block;
```

O _`display inline block`_ junta as vantages dos dois elemento acima, deixa os elementos na mesma linha e deixa alterar o width e height
```
display: inline-block;
```

`Propriedade position`

O _`position absolute`_ faz com que consigamos mover os elementos de forma absoluta. Assim como o `float`, ele cria também um novo contexto. O que define a largura e altura é o conteúdo que se encontra dentro do elemento.

Em conjunto com o position, pode-se usar o `top: bottom, left, right` mover em relação a página.
```
position: absolute;
top: right; // left, bottom
```

Para relacionar os elementos de forma dinâmica, podemos utilizar a propriedade transform.
```
transform: translateX(-50%) translateY(-50%);
```

`Transition`

Essa propriedade consegue animar qualquer ação que estiver sendo executada, como por exemplo um transform. Com a sintaxe abaixo, o transition consegue retardar ou avançar o tempo que a transação do transform ocorre. E isso pode ser realizado por outras propriedades além do transform. No exemplo abaixo estou dizendo que a propriedade transform irá ter sua transação no tempo de 200 milissegundos e de forma linear. Se não quiser especificar a propriedade que irá receber esse transition, pode deixar em branco, porque o default dessa propriedade transition é `_all_`.

```
transition: transform 200ms linear;
```

O _`vertical-align`_ faz com que dois elementos que sejam `display inline-block` fiquem alinhados verticalmente.
```
vertical-align: top;
```

`Emmet`

É uma tecnologia para escrever códigos mais rápido. No visual code já vem instalado por padrão, se não vier, só ir em emmet.io e instalar.

Exemplo para escrever várias dl, dt e dd:
```
dl>dt{Fone top, feliz e caro}+dd*7

button.button-store.-second{Adicionar texto}
```

O `box-sizing` define o dimensionamento que o elemento terá dependendo de outro elemento. No caso, se ele estiver como `box-sizing: content-box` pegará o tamanho e largura do elemento e somará, se estiver com `box-sizing: border-box` pegará o tamanho e largura do elemento e subtrará do elemento.
```
box-sizing: border-box;
```

`Variação no CSS`

Variação no CSS significa que uma classe implementa determinas propriedas adicionais além da classe principal da qual está sendo implementada. A sintaxe é sempre escrita com _`-`_ antes do nome da classe.
```
-second {

}
```

Entretanto, como é apenas uma classe secundária que está implementando uma classe principal, precisamos informar ao CSS que essa classe secundário só funcionará se tiver a classe primária também, para isso basta escrever da seguinte forma.
```
.button-store.-second {

}
```

`Description list (dl), Description title (dt), Description define (dd)`

Quando for realizar a descrição de um produto ou qualquer outra coisa existe as tags acima.

`Escolhendo exatamente o elemento abaixo de outro`

Para isso é necessário colocar o sinal de `+` antes da classe do elemento seguinte.

```
.product-description > .item.-star + .item {
    margin-left: 8px;
}
```

`Affordance, um pouco de UX`

Fácil de usar e intuitivo. Todo desenvolvedor front-end precisa se perguntar se o que está sendo desenvolvido tem essas duas qualidades para o usuário. Isso é `_Affordance_`.

`Propriedade after do CSS`

Para criarmos alguns componentes tais como borda ou outros atrativos dinâmicos que serão apenas visuais para o usuário e não receberão nenhum conteúdo, o correto não é criar classes no html apenas para conseguirmos pegar o atributo no CSS, o correto é utilizar a propriedade after do próprio CSS que cria componentes para nós junto com `content: "";`. Acessar o commit [Criando borda dinâmica](https://github.com/LuizRamos19/loja-fone/commit/e415b94fba443353081d097b7fa6762aa6e79e3c "Clique e acesse agora!")

```
.header-store .action:after {
    content: "";
}
```

`Valor de especificidade`

Na prática, os seletores que foram declarados primeiro, serão sobrescritos pelos seletores que forem declarados posteriormente.

Um seletor de `_tag_` tem valor de especificidade igual a 1, selector de `_class_` tem valor de especificidade igual a 10, um seletor de `_id_` tem valor de especificidade igual a 100.

Se temos um seletor declarado acima de outro seletor no código CSS que possui um valor de especificidade maior do que o que foi declarado posteriormente, significa que o que foi declarado posteriormente não irá sobrescrever o que foi declarado antes.

```
nav#navigation-collab.navigation-collab {
    /* 1 + 100 + 10 = 111 */ Valor de especificadade
    color: red;
}

nav.navigation-collab ul li.item a {
    /* 1 + 10 + 1 + 1 + 10 + 1 = 24 */
    font-size: 50px;
}

.navigation-collab .action {
    color: inherit;
}

nav#navigation-collab.navigation-collab {
    /* 1 + 10 = 11 */
    color: blue;
}

nav#navigation-collab:hover {
    /* 1 + 100 + 10 = 111*/
    color: magenta;
}
```

`
Pixel físico vs pixel CSS
`

Pixel físico nada mais é do que a resolução física de uma tela. Por exemplo, na especificações do celular, diz que a resolução é de 1340x720 pixels.

Pixel do CSS nada mais é do que a resolução virtual do próprio CSS chamado de `_device width_`. Este conseguimos controlar com o CSS.

Para utilizar a resolução do device width de cada dispositivo basta adicionar a meta tag abaixo no header do HTML.

```
<meta name="viewport" content="width=device-width, initial-scale=1.0" >
```

O initial-scale=1.0 é para sempre que o usuário sair e entrar novamente no site, o site tirar todo o zoom. Isso ocorre porque quando um user dá zoom, o browser guarda esse zoom até o próximo acesso do user no site. Colocando o `_initial-scale=1.0_`, toda a vez que o user acessar o site, irá retirar o zoom da tela.

#Protocolos de internet HTTP

`HTTP`

Protocolo é o padrão estabelecido para se comunicar com o servidor. 

Requisição e resposta.

http://facebook.com/luiz.ramos/posts?id=1&text=true;

http:// -> Protocolo de comunicação
facebook.com/ -> Dominio
luiz.ramos/posts?id=1&text=true -> Path/caminho ou recurso (mais utilizado quando se trata de API)
?id=1&text=true - > Esses dados são chamados de `_Query String_`

`HTTPS`

Neste protocolo, diferente do `HTTP`, os dados são criptografados por uma chave pública e descriptografados por uma chave privada, onde cada servidor ou máquina de destino possui a sua própria.

`SSH`

Criar um túnel de comunicação entre o cliente e o servidor.
Segue o mesmo princípio de chave públic e privada do protocolo `_HTTP_`.

#JavaScript

Basicamente, um site é composto pelas 3 linguagens: HTML, CSS e JavaScript

```
- HTML: Cuida do conteúdo (Foto, vídeo, texto, etc) de forma semântica, ou seja, por meio de tags tais como <H1>, <p>. A partir do HTML5 o HTML começa a cuidar também da estrutura, por meio das tags <article>, <header>, <footer>, etc.
- CSS: Tudo o que é visual. No CSS3, o CSS passou a cuidar também da animação.
- JavaScript: Cuida da parte do comportamento da página e da interação do usuário, ou seja, conforme o user interage com a página, conseguimos mudar alguns comportamentos dos componentes.
```

O comando `_window_` consegue pegar toda a janela (browser). É esse comando que consegue pegar o scroll da tela, o tamanho do width da tela, etc.

O comando `_window.document_` pega a estrutura do HTML.

O comando `_window.document.querySelector()_` serve para selecionar um elemento da janela, seja ele um seletor de tag, de classe, etc.

Por boa prática, qualquer variável que for guardar o elemento de um HTML, deve ser declarado com `_$_` antes do nome da variável.

O comando `_classList.toggle_` serve para verificar se uma classe existe naquele elemento do qual está fazendo referência e se existir, ele remove, caso contrário, adiciona. Serve para substituir um if para realizar esta ação.

```
$hear.classList.toggle('-active');
```

Função anônima é aquela função que não possui nome.

```
$stars.forEach(function () {
    console.log('Teste');
});
```

A tag `_form_` adiciona um evento de envio de informações para o browser, isso significa que se ao momento de clicar em algum botão ou input dentro de um elemento com a tag form, o browser direciona o usuário para outro lugar; se não estipularmos para onde direcionar o usuário no momento do click, a tela irá carregar automaticamente. Para evitar esse comportamento dentro do JavaScript tem a propriedade a `_preventDefault()_`. O evento que se passa como parâmetro é o evento do form de recarregar a página.

```
$icon.addEventListener('click', event =>  {
    event.preventDefault();
    $inputSearch.classList.toggle('-active');
});
```