---
id: Hosting
title: Hosting
---

# Welcome to Hosting tutorial for you lab

#### Please make sure to read hardware requirement before proceeding to this page.


1. After clone Hosting Branch to your computer please verify your NVIDIA gpu is supporting CUDA by using this cmd in terminal/cmd below:  
`nvidia-smi`

![example](../../static/img/nvidia.png)

2. Hosting branch is already configured to run the AI model and Embedding model with all visible GPUs. If you wish to change this setting modify this file:
`docker-compose.yml` under `backend` and `ollama` service.

![docker](../../static/img/gpu.png)

3. Next check your local IP address using this cmd `ipconfig` in terminal and look for IPv4 Address:
![ip](../../static/img/ip.png)

4. Change your app hosting IP address to make it visible for all local network user.
- After getting your local hosting device IP address in step 3, please use it and modify `backend/app/__init__.py` line 31
![ipmod](../../static/img/IPMOD.png)

- After modify your backend hosting IP please navigate to `frontend/vite.config.js` and replace localhost to your IP
![IPfrontend](../../static/img/FrontendIP.png)



