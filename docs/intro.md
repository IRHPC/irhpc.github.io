---
sidebar_position: 1
---

# Acquiring Access

The resources provided by the Icelandic high performance computing centre (IHPC/IREI) is available to 
Icelandic universities and governmental research institutes. Scientists in independent 
research instututes may also gain access, provided their research is funded by public grants.

The expert panel of the IHPC/IREI grants access, and it is provided by two different means:

1) by cooperation through the Rannís Infrastructure Fund (the Icelandic Centre for research). See more details here.
2) by web application. See more details here. 

# Logging In

## Externally
For users outside the University Network, we access the clusters via the `krafla` front-facing node:

```bash
uglaUser="rog68"
ssh $uglaUser@krafla.rhi.hi.is
# Now on the network
ssh elja.hi.is # or garpur or jotunn
```

Congratulations on getting to login node! 


:::caution

**Do nothing** without reading the [common etiquette section](common/etiquette).

:::
