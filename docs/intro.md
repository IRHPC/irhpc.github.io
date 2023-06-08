---
sidebar_position: 1
---

# Acquiring Access

The resources provided by the Icelandic high performance computing centre (IHPC/IREI) are available to 
Icelandic universities and governmental research institutes. Scientists in independent 
research instututes may also gain access, provided their research is funded by public grants.

The expert panel of the IHPC/IREI grants access, and it is provided by two different means:

1. by cooperation through the Rannís Infrastructure Fund (the Icelandic Centre for research).
2. by application. The formal application can be sent to "help@hi.is".

See more details [here](./files/rulesandreg-v1-2.pdf). A formal application should include a description of the project, the estimated time for completion and the type of software and resource required to complete the project. 

# Logging In

After being granted access you will be prompted to generate an SSH key. See the [Connecting & SSH keys](./connecting/01_general.md) section. When the SSH key is active the system administrators will let you know, and then you can log into the system.

## Externally
We log into the Elja front-facing node:

```bash
$ ssh uname@elja.hi.is
# Or if you are juggling many .ssh keys
$ ssh -i ~/.ssh/id_elja uname@elja.hi.is
```

Congratulations on getting to the login node! 

:::caution

**Do nothing** without reading the [User Agreement](./files/useragree-v1-3.pdf) and [common etiquette section](./common/02_etiquette.md).

:::

# Acknowledgement

We kindly request users to acknowledge the resources and user support provided by the Icelandic Research electronic-Infrastructure (IREI) in publications. An example is provided below

:::note Acknowledgement
Computer resources, data storage and user support are provided by the Division of Information Technology of the University of Iceland through the Icelandic Research e-Infrastructure project, funded by the Icelandic Centre of Research infrastructure fund.
:::
