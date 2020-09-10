# Building Docker Images Inside Jobs

If you distribute and deploy your apps with Docker, chances are you build them inside your CI (and if you don't, we really think you should, it makes your life a lot more simple).

Say we have the following `.metroline.yml`:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
jobs:
  docker:
    image: docker
    script:
      - docker build -t my/image .
```

</div>

If you run a pipeline, the logs for `` will see this:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```shell-session
Pulling from library/docker
Digest: sha256:f9a24a777e813e2692920a86530355e3840d0271464fd486bd8708aa018d0ac6
Status: Image is up to date for docker:latest
$ docker build -t my/image .
time="2020-09-09T09:45:54Z" level=error msg="failed to dial gRPC: cannot connect to the Docker daemon. Is 'docker daemon' running on this host?: dial unix /var/run/docker.sock: connect: no such file or directory"
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
command exited with code 1
```

</div>

This problem occurs because your job doesn't have a Docker socket at hand. To provide it with one, restart your runner with the [METROLINE_JOB_DOCKER_SOCK](/docs/environment-reference/runner#metroline_job_docker_sock) environment variable set:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```dotenv
METROLINE_JOB_DOCKER_SOCK=/var/run/docker.sock
```

</div>

and re-run your pipeline. You now get this:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```shell-session
Pulling from library/docker
Status: Image is up to date for docker:latest
Digest: sha256:f9a24a777e813e2692920a86530355e3840d0271464fd486bd8708aa018d0ac6
$ docker build -t my/image .
Sending build context to Docker daemon  3.072kB


 ---> 18f4bc975732
Step 1/1 : FROM node:12-alpine
Successfully built 18f4bc975732
Successfully tagged my/image:latest
```

</div>
