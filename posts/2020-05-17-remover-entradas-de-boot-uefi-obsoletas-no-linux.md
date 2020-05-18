---
title: Remover entradas de boot UEFI obsoletas no Linux
description: >-
  Como remover uma entrada de boot de um SO(distro) que não esteja mais
  utilizando, porém ainda aparece no Grub.
date: '2020-05-17 10:26:22'
thumbnail: /assets/img/settings.webp
category: misc
background: '#7aab13'
---
**Lista opções:**

```sh
efibootmgr
```

```sh   
efibootmgr
   
BootCurrent: 0002
Timeout: 0 seconds
BootOrder: 0002,0000,002A,002B,0037,0038,0030,0031,0032,0033
Boot0000* Windows Boot Manager
Boot0001  Diskette Drive
Boot0002* deepin
Boot0016* USB Storage Device
```

**Deleta opção:**

```sh
sudo efibootmgr -b <opcao_de_boot> -B
```

Substitua `<opcao_de_boot>` pelo número da opção que deseja deletar, por exemplo, se eu fosse deletar o `deepin` a opção seria `2`, o comando ficaria assim:

```sh
sudo efibootmgr -b 2 -B
```
