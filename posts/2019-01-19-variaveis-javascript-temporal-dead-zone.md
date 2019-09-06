---
title: Variáveis JavaScript & Temporal Dead Zone
description: const, var, let… Afinal, quais são as reais diferenças ao criar variáveis comessas palavras chaves.
date: "2019-01-28 10:19:00"
thumbnail: /assets/img/js.jpeg
category: js
background: "#d6ba32"
---

Olá devs,

Vamos ver aqui as principais diferenças ao criar variáveis em JavaScript utilizando, _const, var_ e _let_, como já falado no subtítulo rs.

## const

Quero começar esclarecendo um ponto que ouço muito pessoas falando e que precisamos só ter um pouquinho mais de atenção.

_const_, é uma variável imutável certo?… Bom, não é bemm assim. Bora lá entender.

```javascript
const letter = "A"
letter = "B"
```

Definimos uma _const_ _letter_ = ‘A’, ao tentar atribuir um novo valor ‘B’ a _letter_ vamos ver no console que acontece um erro:

![](/assets/img/console.png)

Até ai tudo bem, ele não permitiu atribuir o novo valor, mas vamos a outro caso:

```javascript
const letter = {
  first: "A",
  second: "C",
}
console.log(letter)
```

Aqui definimos a primeira letra “A” e repare que a segunda letra definimos ‘C’. No console isso nos retorna:

![](/assets/img/console2.png)

Agora se tentarmos alterar o valor de uma das propriedades do objeto, será que retorna algum erro?

```javascript
const letter = {
  first: "A",
  second: "C",
}
console.log(letter)
letter.second = "B"
console.log(letter)
```

Redefinimos a segunda letra ‘B’, o que o console nos retorna?

![](/assets/img/console3.png)

É isso mesmo, conseguimos alterar o valor de uma propriedade dentro de um objeto que foi utilizado a palavra chave _const_ para definir uma variável.

Se tentarmos reescrever a variável como :

```javascript
const letter = {
  first: "A",
  second: "C",
}
const letter = {
  first: "A",
  second: "B",
}
console.log(letter)
```

Nesse caso sim retorna erro dizendo que não podemos redeclarar a _const_:

![](/assets/img/console4.png)

Então, é importante entendermos que a variável declarada com const não conseguimos redeclarar, mas, a propriedade do objeto declarado com const sim podemos reescrever, sendo assim não podemos dizer que ela é imutável.

Para podermos dizer que uma variável é imutável poderíamos utilizar o **_Object.freeze_**.

```javascript
const letter = {
  first: "A",
  second: "C",
}
Object.freeze(letter)
letter.second = "B"
console.log(letter)
```

Agora sim, repare que ele congelou o objeto e ignorou ao tentarmos redefinir _second_.

![](/assets/img/console2.png)

Agora nesse caso podemos dizer que é uma variável imutável, pois não conseguimos redeclarar e nem reescrever as suas propriedades.

---

## var

Variáveis criadas com a palavra chave var, são globais a não ser que sejam criadas dentro de funções. Também chamadas **function scope,** nesse [link](<Variáveis criadas com a palavra chave var, são globais a não ser que sejam criadas dentro de funções. Também chamadas function scope, nesse link você pode ler mais sobre function scopes e block scopes. Vamos aos exemplos:>) você pode ler mais sobre f**unction scopes** e **block scopes.** Vamos aos exemplos:

Temos uma variável _motorcycle_ definida como _Harley Davidson_.

```javascript
function motorcycles() {
  var motorcycle = "Harley Davidson"
  console.log(motorcycle)
}
motorcyles()
```

No console temos:

![](/assets/img/console5.png)

Mas veja só, adicionando um _console.log_ fora da _function_ :

```javascript
function motorcycles() {
  var motorcycle = "Harley Davidson"
  console.log(motorcycle)
}
motorcyles()
console.log(motorcycle)
```

O resultado é esse:

![](/assets/img/console6.png)

Pois é, o primeiro resultado funcionou como esperado, mas o _console.log_ que está fora do escopo do bloco da função retornou um erro dizendo que _motorcycle_ não está definida. Mas, olha que interessante:

```javascript
var motorcycle
function motorcycles() {
  var motorcycle = "Harley Davidson"
  console.log(motorcycle)
}
motorcyles()
console.log(motorcycle)
```

Definimos a variável antes da função, dentro do bloco da função atribuímos um valor para a variável e da mesma maneira colocamos um console.log fora da função, o que isso nos retorna?

![](/assets/img/console7.png)

Isso acontece porque definimos a variável de forma global e mesmo que uma função, por exemplo, atribua um valor a essa variável, conseguimos chamar sem problema. É um pouco complicado e temos que tomar cuidado, porque se tivermos variáveis de mesmo nome definidas como globais e outras funções estiverem alterando essa variável, podemos fazer uma grande bagunça, também por isso foram implementados _let_ e _const_ para melhorar a forma de declararmos uma variável de acordo com a necessidade do projeto.

---

## let

_let_ é muito útil quando queremos utilizar variáveis uma única vez dentro daquele escopo e não queremos correr o risco de ter essas variáveis reescritas fora desse escopo, também muito útil quando utilizamos códigos de terceiros ou muito grandes.

Uma das diferenças da palavra chave _let_ em relação a _var_, é que _let_ não deixa criar variáveis de mesmo nome dentro de um mesmo escopo:

```javascript
var motorcycle = "Harley Davidson"
let motorcycle = "Harley Davidson"
```

Se tentarmos definir um mesmo nome de variável temos um erro dizendo que estamos tentando redeclarar a variável _motorcycles_:

![](/assets/img/console8.png)

No entanto se colocarmos _let_ dentro de um bloco não temos mais o erro:

```javascript
var motorcycle = "Harley Davidson"
{
  let motorcycle = "Custon"
  console.log(motorcycle)
}
```

Note que não ocorre erro no console:

![](/assets/img/console9.png)

Agora vamos mudar um pouquinho nosso código:

```javascript
var motorcycle = "Harley Davidson"
console.log(motorcycle)
{
  let motorcycle = "Custon"
  console.log(motorcycle)
}
console.log(motorcycle)
```

Repare que colocamos um console.log antes do bloco do let, um console.log dentro do bloco e outro console.log depois do bloco e também modificamos o valor da variável declarada com let para ‘Custon’. Na teoria, o console.log depois do bloco em que let foi declarado não deveria ter o valor que foi definido dentro do bloco, vamos ver na prática.

O resultado foi esse:

![](/assets/img/console10.png)

Viu só? Foi isso mesmo que aconteceu. A palavra chave let manteve o valor da variável somente no escopo do bloco em que ela foi declarada.

---

## Temporal Dead Zone

Zona morta temporal, consiste basicamente em que você não pode acessar uma variável antes que ela tenha sido definida. Mas vamos entender isso e como funciona.

> **Hoisting**

Em JavaScript quando declaramos uma função acontece algo chamado _hoisting_ que significa levantar ou suspender algo, então quando criamos uma variável independente da posição, o que o _hoisting_ faz é colocar essa variável no topo do escopo. Você pode se inteirar mais sobre isso no [mdn](https://developer.mozilla.org/pt-BR/docs/Glossario/Hoisting), [w3](https://www.w3schools.com/js/js_hoisting.asp), … Tendo isso em mente vamos as variáveis.

```javascript
console.log(auto)
var auto = "car"
```

Definimos uma variável com _var_ mas repare que chamamos ela no console antes de definirmos ela, o que isso nos retorna?

![](/assets/img/console11.png)

Veja que o retorno dela foi como _undefined_. Isso acontece porque as variáveis definidas com _var_, são acessadas somente quando são definidas, antes disso não conseguimos acessar o valor real deles.

Se mudarmos a palavra chave para _const_ ou _let_:

```javascript
console.log(auto)
const auto = "car"
```

```javascript
console.log(auto)
let auto = "car"
```

Acontece algo diferente:

![](/assets/img/console12.png)

Agora é um erro de fato e ele quebra o código, nos avisando que não podemos acessar a declaração _let_ e _const_ antes de inicializarmos elas. Ou seja a declaração da variável é _Hoisted_ mas sua inicialização não.

Então, **Temporal Dead Zone** nos ajuda a identificar erros como se o código não estiver rodando na ordem correta, ou uma distração nossa como chamar a variável antes de atribui-la …

Portanto, as variáveis com _let_ e _const_, não sobem com _Hoisting_, o erro já aparece logo de cara rs.

---

Por hoje era isso galera, fique a vontade para deixar sua opinião e trocarmos uma idéia!

Valeu!
