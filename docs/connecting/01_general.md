---
slug: connectingssh
---

# Connection & SSH keys

We make use of [SSH keys](https://www.ssh.com/academy/ssh/ssh-key-basics) 
to securely connect to the Elja login node. 
Every SSH key comes in a pair; a private key which is hosted on your local machine, 
and a public key which is hosted on the login node. 

:::caution
**You should under no circumstances share the content of your private key. Especially if asked by admins.**
:::

An SSH key should be unique to the machine it is made on (i.e. do not copy/send them between machines).
If you wish to use more than one machine to connect to Elja you need to generate a key for each machine and contact the admins.

:::note
If you are outside of the university network it is strongly recommended to access Elja through a VPN, especially if you are abroad. 
This adds an extra layer of security. 
See here [ISL](https://uts.hi.is/node/212/)/[ENG](https://uts.hi.is/node/341) for instructions on how to set up a VPN to the University of Iceland network. 
:::
