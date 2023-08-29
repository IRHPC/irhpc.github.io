---
slug: matlab
---

# MatLab
MatLab runs as a [Singularity](singularity) container. 
You will need to provide your [MathwWorks](https://mathworks.com) account email to use your individual license.

## Loading Matlab
MatLab is available as a module on **Elja**
```bash
$ ml load Matlab
```


## Running Matlab
To run Matlab use the `matlab` command.

:::note
You will need to enter an [Interactive Session](../elja/interactive_session) or run  [Batch job](https://irhpc.github.io/docs/elja/submit_jobs) to run matlab. 
:::

### Activating your license on Elja

If this is the first time you run Matlab on **Elja** you will be prompted for your MathWorks account email:

```bash
$ srun --job-name "Matlab Job" --partition any_cpu --cpus-per-task 24 --mem-per-cpu 3900 --time 02:00:00 --pty bash
$ matlab 
MATLAB is selecting SOFTWARE OPENGL rendering.
Please enter your MathWorks Account email address and press Enter:
```

If you are associated with [HI](https://hi.is) you can use your `<uname>@hi.is` email, otherwise you will need to provide an email address with an active license. 

Once the you have entered your user account email you will be given a one time password.
```bash
Single-Sign-On(SSO) is not available in this environment. You need a one-time password to sign in to MATLAB.
        Step 1. Visit https://www.mathworks.com/mwa/otp
        Step 2. Copy the password.
        Step 3. Return here, and input the password.
Please enter the one-time password:
```

Navigate to the given link and type in the one time password.
Your license should now be active and you will be able to run MatLab on any partition you want.

### Hello, Matlab!
Create a file called `hello.m`  and add the following lines:
```bash
$ touch hello.m
$ echo "disp("Hello, Matlab!");" > hello.m
```

Now we can run the file in our interactive session

```bash
$ matlab -r "run('hello.m')"
Starting MATLAB with license: xxxxxxx - MATLAB (Individual)

                                                                                                          < M A T L A B (R) >
                                                                                                Copyright 1984-2023 The MathWorks, Inc.
                                                                                           R2023a Update 3 (9.14.0.2286388) 64-bit (glnxa64)
                                                                                                              May 25, 2023

 
To get started, type doc.
For product information, visit www.mathworks.com.
 
Hello, Matlab!
```
:::note
Please type `exit` when you want to close Matlab ctrl+c causes input/output errors.
:::
