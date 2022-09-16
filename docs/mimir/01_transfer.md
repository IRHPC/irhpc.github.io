---
slug: datatransfer
---

# Data Management and Transfer for Mimir-II

All large data sets - i.e. the data you will be working with - should go to your 
personal Mimir directory: 

**/hpcdata/Mimir/<uname\>**

Here and in the following, **<uname\>** refers to your user account / login name. 

You can also transfer data into a shared directory if 
there are more than one users working with the same data: 

**/hpcdata/Mimir/shared/**

All Mimir-II users share the same group HTC-Mimir, which have access to the shared directory. 
After transferring file(s) **data** into the shared folder you need to change 
the ownership and permission:

```bash
[..]$ chown -R <uname>:HTC-Mimir /hpcdata/Mimir/shared/data
```

followed by:

```bash
[..]$ chmod -R 771  /hpcdata/Mimir/shared/data
```

which makes the file(s) read-write-executable by anyone in the group HTC-Mimir.

:::note
Contact the system administrator if you need to securely share data between certain users.
:::

:::caution
**Elja is not a data storage device! There is a finite amount of disk space.** 
As a courtesy to the other users of Elja please remove large data sets after they have been 
processed. Large data which is left untouched for **TBD** months will be deleted.
:::

## Transferring Data from Mimir-I to Mimir-II

When your account is active and you have logged into Elja 
(which hosts Mimir-II) you can use **scp** to transfer files from Mimir-I. 
For individual files:

```bash
[..]$ scp -p <mimir1username>@mimir.cs.hi.is:/nfs/bigdata/../data /hpcdata/Mimir/<uname>/.
```

and for directories with multiple files add -r (recursive):

```bash
[..]$ scp -p -r <mimir1username>@mimir.cs.hi.is:/nfs/bigdata/../data/ /hpcdata/Mimir/<uname>/.
```

## Transferring Local Data To-and-From Mimir-II 

On a unix system the commands are more or less the same as above, and happen in a 
shell/terminal on the local computer.

From local-to-Elja:

```bash
[..]$ scp -p -r localdata/ <uname>@elja.hi.is:/hpcdata/Mimir/<uname>/.
```

From Elja-to-local:

```bash
[..]$ scp -p -r <uname>@elja.hi.is:/hpcdata/Mimir/<uname>/data/ .
```

For Windows it is recommended to make use of FileZilla or Cyberduck. 
See the section on Connecting and SSH keys for instructions on how to set up the SFTP connection.

:::caution
**ALL data management should happen in the users personal or shared Mimir folder!** 
Do not try to store large files in your home folder **/users/home/<uname\>**. 
The system administrator reserves the right to remove large files from the 
**/users/home/<uname\>** directory, without notice. 
:::
