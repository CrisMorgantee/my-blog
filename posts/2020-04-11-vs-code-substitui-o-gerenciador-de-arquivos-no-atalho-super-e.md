---
title: Shortcut para abrir File Manager  no Linux Deepin
description: >-
  Atalho 'super+e' que por padrão abre o File Manager  foi substituido por outra
  aplicação
date: '2020-04-11 01:34:36'
thumbnail: /assets/img/deepin.png
category: misc
background: '#7aab13'
---
No meu caso o `file manager` foi substituído pelo `vscode`, mas acredito que essa solução pode resolver se for outro programa também. Deixe um comentário se funcionou para você.

Acesse o diretório:

```
cd /usr/share/applications
```
Como administrador abra o arquivo `mimeinfo.cache`  
Procure a linha `inode/directory=` 

Provavelmente o arquivo `dde-file-manager.desktop;` não estará como primeira opção.  
Para voltar o `file manager` como padrão para o atalho `super+e` (ou qualquer outro que você definir) basta coloca-lo na primeira posição.  
Assim:
```
inode/directory=dde-file-manager.desktop;'outras-opcoes-aqui;'
```

Tenha certeza de salvar o arquivo, lembrando que terá que ter permissão de administrador para isso.
