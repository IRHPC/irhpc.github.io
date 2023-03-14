---
slug: unixconnecting
---
# UNIX

## Terminal

To generate an SSH key pair:

```bash
[..]$ ssh-keygen -f ~/.ssh/id_name -t rsa -b 4096
```

Here the key pair is named "id\_name" as an example.

:::note
It is OK to leave the passphrase empty when prompted (i.e. no password). Be aware that if you choose a password your SSH-key based access may not work with SFTP software like FileZilla.
:::

The public part of the key is found here "~/.ssh/id\_name.pub", and it is easiest to view the content like this

```bash
[..]$ cat ~/.ssh/id_name.pub
```

Copy the content and send it to the admins.

After the public key has been uploaded to the login node by the admin, you can log into the system like this

```bash                                                                                             
[..]$ ssh <uname>@elja.hi.is
# or if you are juggling many SSH keys
[..]$ ssh -i ~/.ssh/id_name <uname>@elja.hi.is
``` 

Your terminal window should display a login message, followed by a command line like this:

```bash
[<uname>@elja-ihpc ~]$
```

For quick access it is recommended to make an "alias" in the "~/.bashrc" of your local machine:

```bash
[..]$ cat >> ~/.bashrc << EOF
> alias elja="ssh -i ~/.ssh/id_name <uname>@elja.hi.is
EOF
```

After sourcing the "~/.bashrc" you can log in like this:

```bash                                                 
[..]$ elja                          
``` 

Alternatively you can add a **config** file to your **.ssh** directory

```bash                                                               
[..]$ touch ~/.ssh/config
[..]$ chmod 600 ~/.ssh/config
``` 

then add information about **Elja** to the config file

```bash                                                               
[..]$ cat >> ~/.ssh/config << EOF
> Host Elja
>    HostName elja.hi.is
>    User <uname>
>    Port 22
>    IdentityFile ~/.ssh/id_elja
EOF
``` 

You can now log in via
```bash
[..]$ ssh Elja
```

:::note
**These instruction will not work for Windows command prompt.**
:::

## Errors

### Permission denied

If you get a ```permission denied``` error when trying to connect to Elja you can do the following to possibly solve your issue:


Your ***.ssh*** directory is located in your $HOME directory. Go to $HOME and type:
```bash
$ cd $HOME
$ ls -la .ssh
```

This will list the permission of the **.ssh** folder and files in the folder. Your common files (e.g. known_hosts) and public key files must have the following permissions: **-rw-r--r--**

To change to the correct permission type:

```bash
$ chmod 644 .ssh/known_hosts
$ chmod 644 .ssh/*.pub
```

You private keys must have the permission : **-rw-------**

To change to the correct permission type:

```bash
$ chmod 600 .ssh/nameofkey
```

Finally, the **.ssh** folder must have the following permission : **drwx------**

To change to the correct permission type:

```bash
$ chmod 700 .ssh/
```
