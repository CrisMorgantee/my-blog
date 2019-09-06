---
title: Variáveis JavaScript & Temporal Dead Zone
description: >-
  const, var, let… Afinal, quais são as reais diferenças ao criar variáveis com
  essas palavras chaves.
date: '2019-01-28 10:19:00'
thumbnail: /assets/img/js.jpeg
category: js
background: '#d6ba32'
---
Olá devs,

Vamos ver aqui as principais diferenças ao criar variáveis em JavaScript utilizando, _const, var_ e _let_, como já falado no subtítulo rs.

## const

Quero começar esclarecendo um ponto que ouço muito pessoas falando e que precisamos só ter um pouquinho mais de atenção.

_const_, é uma variável imutável certo?… Bom, não é bemm assim. Bora lá entender.

```javascript
const letter = 'A';
letter = 'B' 
```

Definimos uma _const_ _letter_ = ‘A’, ao tentar atribuir um novo valor ‘B’ a _letter_ vamos ver no console que acontece um erro:

![](/assets/img/console.png)

Até ai tudo bem, ele não permitiu atribuir o novo valor, mas vamos a outro caso:

```javascript
const letter = {
  first: 'A',
  second: 'C'
}
console.log(letter);
```

Aqui definimos a primeira letra “A” e repare que a segunda letra definimos ‘C’. No console isso nos retorna:

![](/assets/img/console2.png)

Agora se tentarmos alterar o valor de uma das propriedades do objeto, será que retorna algum erro?

```javascript
const letter = { 
  first: 'A', 
  second: 'C' 
} 
console.log(letter); 
letter.second = 'B'; 
console.log(letter);
```

Redefinimos a segunda letra ‘B’, o que o console nos retorna?

![](/assets/img/console3.png)

É isso mesmo, conseguimos alterar o valor de uma propriedade dentro de um objeto que foi utilizado a palavra chave _const_ para definir uma variável.

Se tentarmos reescrever a variável como :

```javascript
const letter = { 
  first: 'A', 
  second: 'C' 
} 
const letter = { 
  first: 'A', 
  second: 'B' 
} 
console.log(letter); 
```

Nesse caso sim retorna erro dizendo que não podemos redeclarar a _const_:

![](/assets/img/console4.png)

Então, é importante entendermos que a variável declarada com const não conseguimos redeclarar, mas, a propriedade do objeto declarado com const sim podemos reescrever, sendo assim não podemos dizer que ela é imutável.

Para podermos dizer que uma variável é imutável poderíamos utilizar o _**Object.freeze**_.

```javascript
const letter = { 
  first: 'A', 
  second: 'C' 
}
Object.freeze(letter);
letter.second = 'B'; 
console.log(letter); 
```

Agora sim, repare que ele congelou o objeto e ignorou ao tentarmos redefinir _second_.

![](/assets/img/console2.png)

Agora nesse caso podemos dizer que é uma variável imutável, pois não conseguimos redeclarar e nem reescrever as suas propriedades.

## var

Variáveis criadas com a palavra chave var, são globais a não ser que sejam criadas dentro de funções. Também chamadas **function scope,** nesse [link](<Variáveis criadas com a palavra chave var, são globais a não ser que sejam criadas dentro de funções. Também chamadas function scope, nesse link você pode ler mais sobre function scopes e block scopes. Vamos aos exemplos:>) você pode ler mais sobre f**unction scopes** e **block scopes.** Vamos aos exemplos:

```javascript
var motorcycle = 'Harley Davidson';
console.log(motorcycle)
```

Temos uma variável _motorcycle_ definida como _Harley Davidson_, no console temos:

![](/assets/img/console5.png)

Tudo como esperado. Vamos colocar isso agora , dentro de uma function:
hello
