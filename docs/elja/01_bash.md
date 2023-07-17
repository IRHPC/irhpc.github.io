---
slug: bash
---

# Bash

The cluster runs a Linux operating system where Bash shell scripts and interactive commands are supported. 
A basic familiarity with Bash shell (Linux) commands is required for interacting with the cluster. 

## Common commands

| Command          | Description                                                     |
|------------------|-----------------------------------------------------------------|
| `cp file1 file2` | Copy `file1` and rename it to `file2`                           |
| `mv file1 file2` | Move or rename `file1` to `file2`                               |
| `rm file`        | Deletes a file                                                  |
| `rmdir dir/`     | Removes an **empty** directory                                  |
| `-r`             | The `-r` flag will allow `cp` and `rm` to work with directories |

Some additional useful commands can be found [here](https://www.educative.io/blog/bash-shell-command-cheat-sheet).

## Editing files
Elja offers the basic text editors available for Linux 

### Vim 
Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient.
#### Usage
```bash
vim file.txt
```
[Vim/Vi cheat sheet](https://devhints.io/vim)

### Vi
Vi is a lightweight version of Vim

#### Usage
```bash
vi file.txt
```

[Vim/Vi cheat sheet](https://devhints.io/vim)

### Emacs
Emacs is a text editor designed for POSIX operating systems and available on Linux, BSD, macOS, Windows, and more. Users love Emacs because it features efficient commands for common but complex actions and for the plugins and configuration hacks that have developed around it for nearly 40 years.
#### Usage
```bash
emacs file.txt
```
[Emacs cheat sheet](http://cs.hamilton.edu/misc/EmacsCheatSheet_iupui.pdf)

### Nano
Lightweight and straightforward, nano delivers a simple, intuitive editor with no extra fuss.
### Usage
```bash
nano file.txt
```
[Nano cheat sheet](https://www.nano-editor.org/dist/latest/cheatsheet.html)

## bash_profile and bashrc

### bash_profile
The .bash_profile is a hidde script that is executed only once when you log into your account. This is used to set environment variables and to run commands that are needed only once at the start of your session. It is commonly used to set PATH variable.
### bashrc
Bashrc is a configuration file for the Bash shell, which is the default shell on Elja. It is executed each time you open a new instance of a terminal window, for instance when using the ```screen``` command, and is used to set environment variables, define aliases and customizing your prompt.
