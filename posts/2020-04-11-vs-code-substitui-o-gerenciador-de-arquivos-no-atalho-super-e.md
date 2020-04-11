---
title: Vs Code substitui o `gerenciador de arquivos` no atalho `super + E`
description: Linux Deepin
date: '2020-04-11 01:34:36'
thumbnail: /assets/img/deepin.png
category: misc
background: '#7aab13'
---
Acesse o diretório:

```
cd /usr/share/applications
```

Como administrador abra o arquivo `mimeinfo.cache`

Procure a linha `inode/directory=` 

Provavelmente `dde-file-manager.desktop;` não estará como primeira opção, basta coloca-lo na primeira posição.

```
inode/directory=dde-file-manager.desktop;'outras-opcoes-aqui;'
```

Tenha certeza de salvar o arquivo.
