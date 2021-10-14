---
slug: visualization
---

# Visualization
Some large datasets may on occasion need to be visualized in place, on the cluster. For these situations, the user has several options which are detailed below.

## SSH
The most common approach to visualization is by connecting to the server with a flag to set the `X11` forwarding details. The most common ones are:

```bash
ssh -X someone@something.ip.address # ForwardX11
ssh -Y someone@something.ip.address # ForwardX11Trusted
```

However, a more practically useful method is to modify the `ssh` configuration file itself. The following snippet can be added:

```conf
Host *
  ForwardAgent yes
  ForwardX11 yes
  ForwardX11Trusted yes
  XAuthLocation /opt/X11/bin/xauth # For a Mac with XQuartz
```

For Linux (and Windows with WSL 2) machines, `which xauth` will provide the path for the `XAuthLocation` variable. Now the user is free to connect directly:

```bash
sssh someone@something.ip.address # Reads the ssh configuration
```
