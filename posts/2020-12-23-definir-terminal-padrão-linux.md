---
title: 'Definir Terminal padrão Linux '
description: Como definir seu terminal favorito como padrão em derivados Ubuntu
date: '2020-12-23 08:43:19'
thumbnail: /assets/img/term.png
category: dev
background: '#637a91'
---
Esse comando lista todos os terminais instalados em seu sistema, o terminal padrão no momento é determinado com um * na frente:

`sudo update-alternatives --config x-terminal-emulator`

![Screenshot de um terminal com o resultado do comando acima.](/assets/img/screenshot-from-2020-12-23-09-00-49.png "Konsole terminal")

Para alterar o terminal padrão digite o número correspondente e pressione `enter`.  
Para manter o padrão atual tecle `enter` sem digitar nada.
