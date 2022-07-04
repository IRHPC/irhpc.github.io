---
sidebar_position: 1
---

# Acquiring Access

The resources provided by the Icelandic high performance computing centre (IHPC/IREI) are available to 
Icelandic universities and governmental research institutes. Scientists in independent 
research instututes may also gain access, provided their research is funded by public grants.

The expert panel of the IHPC/IREI grants access, and it is provided by two different means:

1. by cooperation through the Rannís Infrastructure Fund (the Icelandic Centre for research). See more details here.
2. by application. See more details here. The formal application can be sent to "help@hi.is".

# Logging In

## Externally
We log into the Elja front-facing node:

```bash
uglaUser="rog68"
# Now on the network
ssh $uglaUser@elja.hi.is
# Or if you are juggling many .ssh keys
ssh -i ~/.ssh/id_elja $uglaUser@elja.hi.is
```

Congratulations on getting to login node! 


:::caution

**Do nothing** without reading the [common etiquette section](common/etiquette).

:::
