"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Acquiring Access","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Common Rules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Terminology","href":"/docs/common/terminology","docId":"common/terminology"},{"type":"link","label":"Etiquette","href":"/docs/common/etiquette","docId":"common/etiquette"}]},{"type":"category","label":"Elja Usage","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Bash","href":"/docs/elja/bash","docId":"elja/bash"},{"type":"link","label":"Submitting Batch Jobs","href":"/docs/elja/submit_jobs","docId":"elja/submit"},{"type":"link","label":"Scratch Disks","href":"/docs/elja/scratch_disk","docId":"elja/scratch"},{"type":"link","label":"Interactive Sessions","href":"/docs/elja/interactive_session","docId":"elja/interactive"},{"type":"link","label":"Visualization","href":"/docs/elja/visualization","docId":"elja/visualization"}]},{"type":"link","label":"General","href":"/docs/policies","docId":"policies"},{"type":"category","label":"Partitions and Hardware","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Partitions & SLURM","href":"/docs/hardware/parthardw","docId":"hardware/partitions"},{"type":"link","label":"Hardware Specifications","href":"/docs/hardware/hardwarespec","docId":"hardware/specs"}]},{"type":"category","label":"Mimir-II Users","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Data Management and Transfer for Mimir-II","href":"/docs/mimir/datatransfer","docId":"mimir/transfer"}]},{"type":"category","label":"Software","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Available Software Environments","href":"/docs/compiling/easybuild","docId":"compiling/packages"},{"type":"link","label":"Conda, Python, R & Go","href":"/docs/compiling/rcondapython","docId":"compiling/rcondapython"},{"type":"link","label":"Programming and Development Environments","href":"/docs/compiling/environment","docId":"compiling/devenvironment"},{"type":"link","label":"AlphaFold","href":"/docs/compiling/AlphaFold","docId":"compiling/AlphaFold"},{"type":"link","label":"Jupyterlab on Elja","href":"/docs/compiling/jupyterlab","docId":"compiling/jupyterlab"},{"type":"link","label":"Metaerg","href":"/docs/compiling/Metaerg","docId":"compiling/Metaerg"},{"type":"link","label":"TensorFlow","href":"/docs/compiling/TensorFlow-GPU","docId":"compiling/TensorFlow-GPU"},{"type":"link","label":"Singularity","href":"/docs/compiling/singularity","docId":"compiling/singularity"},{"type":"link","label":"MatLab","href":"/docs/compiling/matlab","docId":"compiling/MatLab"},{"type":"link","label":"Nix","href":"/docs/compiling/nix_start","docId":"compiling/nix_start"},{"type":"link","label":"Nix Resources","href":"/docs/compiling/nix_resources","docId":"compiling/nix_resources"}]},{"type":"category","label":"Connecting & SSH keys","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Connection & SSH keys","href":"/docs/connecting/connectingssh","docId":"connecting/general"},{"type":"link","label":"UNIX","href":"/docs/connecting/unixconnecting","docId":"connecting/unix"},{"type":"link","label":"Windows","href":"/docs/connecting/windowsconnecting","docId":"connecting/windows"},{"type":"link","label":"SFTP: Cyberduck/FileZilla","href":"/docs/connecting/sftpconnecting","docId":"connecting/sftp"}]},{"type":"category","label":"Contributing Docs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting Started","href":"/docs/documentation/getting_started","docId":"documentation/getting_started"},{"type":"link","label":"Types of Documentation","href":"/docs/documentation/doc_types","docId":"documentation/doc_types"},{"type":"link","label":"Hosting","href":"/docs/documentation/hosting","docId":"documentation/hosting"}]},{"type":"category","label":"Snippets","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Slurm","href":"/docs/snippets/slurm","docId":"snippets/slurm"},{"type":"link","label":"Nix Snippets","href":"/docs/snippets/nix_snippets","docId":"snippets/nix"}]}]},"docs":{"common/etiquette":{"id":"common/etiquette","title":"Etiquette","description":"Congratulations on getting an account on one of the IRHPC clusters. The documentation here is applicable to all of the machines. Please read this page carefully, and if you are in any doubt on how to perform your tasks on the cluster do not hesitate to contact support.","sidebar":"tutorialSidebar"},"common/terminology":{"id":"common/terminology","title":"Terminology","description":"Some terms which are used throughout:","sidebar":"tutorialSidebar"},"compiling/AlphaFold":{"id":"compiling/AlphaFold","title":"AlphaFold","description":"Introduction","sidebar":"tutorialSidebar"},"compiling/devenvironment":{"id":"compiling/devenvironment","title":"Programming and Development Environments","description":"This page outlines programming and development environments available","sidebar":"tutorialSidebar"},"compiling/jupyterlab":{"id":"compiling/jupyterlab","title":"Jupyterlab on Elja","description":"These instructions show you how to set up a non-browser based Jupyterlab on a compute node,","sidebar":"tutorialSidebar"},"compiling/MatLab":{"id":"compiling/MatLab","title":"MatLab","description":"MatLab runs as a Singularity container.","sidebar":"tutorialSidebar"},"compiling/Metaerg":{"id":"compiling/Metaerg","title":"Metaerg","description":"0. Introduction","sidebar":"tutorialSidebar"},"compiling/nix_resources":{"id":"compiling/nix_resources","title":"Nix Resources","description":"Here we collect some supplementary resources regarding the nix ecosystem.","sidebar":"tutorialSidebar"},"compiling/nix_start":{"id":"compiling/nix_start","title":"Nix","description":"The elja cluster exposes nix to its users, allowing for non-root installations and sharing of configurations. We use an NUR (nix user repository) for elja specific packages.","sidebar":"tutorialSidebar"},"compiling/packages":{"id":"compiling/packages","title":"Available Software Environments","description":"This page outlines the software stacks available to the users and the module manager used to load in the desired software.","sidebar":"tutorialSidebar"},"compiling/rcondapython":{"id":"compiling/rcondapython","title":"Conda, Python, R & Go","description":"It is important to run all package compilations on the log-in node before deploying these environments on the compute nodes.","sidebar":"tutorialSidebar"},"compiling/singularity":{"id":"compiling/singularity","title":"Singularity","description":"Some software will work better in other environments for example AlphaFold","sidebar":"tutorialSidebar"},"compiling/TensorFlow-GPU":{"id":"compiling/TensorFlow-GPU","title":"TensorFlow","description":"Introduction","sidebar":"tutorialSidebar"},"connecting/general":{"id":"connecting/general","title":"Connection & SSH keys","description":"We make use of SSH keys","sidebar":"tutorialSidebar"},"connecting/sftp":{"id":"connecting/sftp","title":"SFTP: Cyberduck/FileZilla","description":"The SSH key can similarly be used to connect with SSH-file-transfer-protocol","sidebar":"tutorialSidebar"},"connecting/unix":{"id":"connecting/unix","title":"UNIX","description":"Terminal","sidebar":"tutorialSidebar"},"connecting/windows":{"id":"connecting/windows","title":"Windows","description":"PuTTygen & PuTTy","sidebar":"tutorialSidebar"},"documentation/doc_types":{"id":"documentation/doc_types","title":"Types of Documentation","description":"We welcome contributions and edits of all kinds, however, primarily we are interested in:","sidebar":"tutorialSidebar"},"documentation/getting_started":{"id":"documentation/getting_started","title":"Getting Started","description":"Thanks for thinking of contributing to the documentation. We will describe some common workflows for the same.","sidebar":"tutorialSidebar"},"documentation/hosting":{"id":"documentation/hosting","title":"Hosting","description":"We deploy the site using GitHub Pages, and the build is facilitated by GitHub Actions.","sidebar":"tutorialSidebar"},"elja/bash":{"id":"elja/bash","title":"Bash","description":"The cluster runs a Linux operating system where Bash shell scripts and interactive commands are supported.","sidebar":"tutorialSidebar"},"elja/interactive":{"id":"elja/interactive","title":"Interactive Sessions","description":"Sometimes it is necessary to run software - or a combination of software -","sidebar":"tutorialSidebar"},"elja/scratch":{"id":"elja/scratch","title":"Scratch Disks","description":"Fast I/O (input/output) is facilitated with use of the local scratch disks available on the compute nodes.","sidebar":"tutorialSidebar"},"elja/submit":{"id":"elja/submit","title":"Submitting Batch Jobs","description":"SLURM","sidebar":"tutorialSidebar"},"elja/visualization":{"id":"elja/visualization","title":"Visualization","description":"Some large datasets may on occasion need to be visualized in place, on the cluster. For these situations, the user has several options which are detailed below.","sidebar":"tutorialSidebar"},"hardware/partitions":{"id":"hardware/partitions","title":"Partitions & SLURM","description":"To view information of the available nodes and partitions use the","sidebar":"tutorialSidebar"},"hardware/specs":{"id":"hardware/specs","title":"Hardware Specifications","description":"In total there are 6528 cores available, including 13 Nvidia A100 Tesla GPU cards. It stands currently at 628 TFLOPS","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Acquiring Access","description":"The resources provided by the Icelandic high performance computing centre (IHPC/IREI) are available to","sidebar":"tutorialSidebar"},"mimir/transfer":{"id":"mimir/transfer","title":"Data Management and Transfer for Mimir-II","description":"All large data sets - i.e. the data you will be working with - should go to your","sidebar":"tutorialSidebar"},"policies":{"id":"policies","title":"General","description":"The application, resource and user policies are outlined in three documents.","sidebar":"tutorialSidebar"},"snippets/nix":{"id":"snippets/nix","title":"Nix Snippets","description":"File Management","sidebar":"tutorialSidebar"},"snippets/slurm":{"id":"snippets/slurm","title":"Slurm","description":"Interactive Sessions","sidebar":"tutorialSidebar"}}}')}}]);