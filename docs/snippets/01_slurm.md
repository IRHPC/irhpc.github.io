---
slug: slurm
---

# Slurm

## Interactive Sessions

### Move to the Node

We can request a job with two compute nodes, and 48 tasks over for thirty minutes.

```bash
srun -N 2 -n 48 -t 30 --pty /bin/bash
# This brings you to the node directly
```

Recall that we have the `help` details, along with the manpages `man srun` which [may be accessed here](http://manpages.org/srun/1).

```bash
❯ srun --help
Usage: srun [OPTIONS(0)... [executable(0) [args(0)...]]] [ : [OPTIONS(N)...]] executable(N) [args(N)...]

Parallel run options:
  -A, --account=name          charge job to specified account
      --acctg-freq=<datatype>=<interval> accounting and profiling sampling
                              intervals. Supported datatypes:
                              task=<interval> energy=<interval>
                              network=<interval> filesystem=<interval>
      --bb=<spec>             burst buffer specifications
      --bbf=<file_name>       burst buffer specification file
      --bcast=<dest_path>     Copy executable file to compute nodes
  -b, --begin=time            defer job until HH:MM MM/DD/YY
  -c, --cpus-per-task=ncpus   number of cpus required per task
      --comment=name          arbitrary comment
      --compress[=library]    data compression library used with --bcast
      --cpu-freq=min[-max[:gov]] requested cpu frequency (and governor)
  -d, --dependency=type:jobid[:time] defer job until condition on jobid is satisfied
      --deadline=time         remove the job if no ending possible before
                              this deadline (start > (deadline - time[-min]))
      --delay-boot=mins       delay boot for desired node features
  -D, --chdir=path            change remote current working directory
      --export=env_vars|NONE  environment variables passed to launcher with
                              optional values or NONE (pass no variables)
  -e, --error=err             location of stderr redirection
      --epilog=program        run "program" after launching job step
  -E, --preserve-env          env vars for node and task counts override
                              command-line flags
      --gres=list             required generic resources
      --gres-flags=opts       flags related to GRES management
  -H, --hold                  submit job in held state
  -i, --input=in              location of stdin redirection
  -I, --immediate[=secs]      exit if resources not available in "secs"
      --jobid=id              run under already allocated job
  -J, --job-name=jobname      name of job
  -k, --no-kill               do not kill job on node failure
  -K, --kill-on-bad-exit      kill the job if any task terminates with a
                              non-zero exit code
  -l, --label                 prepend task number to lines of stdout/err
  -L, --licenses=names        required license, comma separated
  -M, --clusters=names        Comma separated list of clusters to issue
                              commands to.  Default is current cluster.
                              Name of 'all' will submit to run on all clusters.
                              NOTE: SlurmDBD must up.
  -m, --distribution=type     distribution method for processes to nodes
                              (type = block|cyclic|arbitrary)
      --mail-type=type        notify on state change: BEGIN, END, FAIL or ALL
      --mail-user=user        who to send email notification for job state
                              changes
      --mcs-label=mcs         mcs label if mcs plugin mcs/group is used
      --mpi=type              type of MPI being used
      --multi-prog            if set the program name specified is the
                              configuration specification for multiple programs
  -n, --ntasks=ntasks         number of tasks to run
      --nice[=value]          decrease scheduling priority by value
      --ntasks-per-node=n     number of tasks to invoke on each node
  -N, --nodes=N               number of nodes on which to run (N = min[-max])
  -o, --output=out            location of stdout redirection
  -O, --overcommit            overcommit resources
      --het-group=value       hetjob component allocation(s) in which to launch
                              application
  -p, --partition=partition   partition requested
      --power=flags           power management options
      --priority=value        set the priority of the job to value
      --prolog=program        run "program" before launching job step
      --profile=value         enable acct_gather_profile for detailed data
                              value is all or none or any combination of
                              energy, lustre, network or task
      --propagate[=rlimits]   propagate all [or specific list of] rlimits
      --pty                   run task zero in pseudo terminal
      --quit-on-interrupt     quit on single Ctrl-C
  -q, --qos=qos               quality of service
  -Q, --quiet                 quiet mode (suppress informational messages)
      --reboot                reboot block before starting job
  -r, --relative=n            run job step relative to node n of allocation
  -s, --oversubscribe         over-subscribe resources with other jobs
  -S, --core-spec=cores       count of reserved cores
      --signal=[R:]num[@time] send signal when time limit within time seconds
      --slurmd-debug=level    slurmd debug level
      --spread-job            spread job across as many nodes as possible
      --switches=max-switches{@max-time-to-wait}
                              Optimum switches and max time to wait for optimum
      --task-epilog=program   run "program" after launching task
      --task-prolog=program   run "program" before launching task
      --thread-spec=threads   count of reserved threads
  -T, --threads=threads       set srun launch fanout
  -t, --time=minutes          time limit
      --time-min=minutes      minimum time limit (if distinct)
  -u, --unbuffered            do not line-buffer stdout/err
      --use-min-nodes         if a range of node counts is given, prefer the
                              smaller count
  -v, --verbose               verbose mode (multiple -v's increase verbosity)
  -W, --wait=sec              seconds to wait after first task exits
                              before killing job
      --wckey=wckey           wckey to run job under
  -X, --disable-status        Disable Ctrl-C status feature

Constraint options:
      --cluster-constraint=list specify a list of cluster-constraints
      --contiguous            demand a contiguous range of nodes
  -C, --constraint=list       specify a list of constraints
      --mem=MB                minimum amount of real memory
      --mincpus=n             minimum number of logical processors (threads)
                              per node
      --reservation=name      allocate resources from named reservation
      --tmp=MB                minimum amount of temporary disk
  -w, --nodelist=hosts...     request a specific list of hosts
  -x, --exclude=hosts...      exclude a specific list of hosts
  -Z, --no-allocate           don't allocate nodes (must supply -w)

Consumable resources related options:
      --exclusive[=user]      allocate nodes in exclusive mode when
                              cpu consumable resource is enabled
                              or don't share CPUs for job steps
      --exclusive[=mcs]       allocate nodes in exclusive mode when
                              cpu consumable resource is enabled
                              and mcs plugin is enabled
                              or don't share CPUs for job steps
      --mem-per-cpu=MB        maximum amount of real memory per allocated
                              cpu required by the job.
                              --mem >= --mem-per-cpu if --mem is specified.
      --resv-ports            reserve communication ports

Affinity/Multi-core options: (when the task/affinity plugin is enabled)
  -B, --extra-node-info=S[:C[:T]]           Expands to:
      --sockets-per-node=S    number of sockets per node to allocate
      --cores-per-socket=C    number of cores per socket to allocate
      --threads-per-core=T    number of threads per core to allocate
                              each field can be 'min' or wildcard '*'
                              total cpus requested = (N x S x C x T)

      --ntasks-per-core=n     number of tasks to invoke on each core
      --ntasks-per-socket=n   number of tasks to invoke on each socket
      --cpu-bind=             Bind tasks to CPUs
                              (see "--cpu-bind=help" for options)
      --hint=                 Bind tasks according to application hints
                              (see "--hint=help" for options)
      --mem-bind=             Bind memory to locality domains (ldom)
                              (see "--mem-bind=help" for options)

GPU scheduling options:
      --cpus-per-gpu=n        number of CPUs required per allocated GPU
  -G, --gpus=n                count of GPUs required for the job
      --gpu-bind=...          task to gpu binding options
      --gpu-freq=...          frequency and voltage of GPUs
      --gpus-per-node=n       number of GPUs required per allocated node
      --gpus-per-socket=n     number of GPUs required per allocated socket
      --gpus-per-task=n       number of GPUs required per spawned task
      --mem-per-gpu=n         real memory required per allocated GPU

Help options:
  -h, --help                  show this help message
      --usage                 display brief usage message

Other options:
  -V, --version               output version information and exit
```

### Request Nodes

With `sallocate` we do not get shifted to the node, this is useful for callbacks.
