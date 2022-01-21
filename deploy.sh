#!/bin/bash

DEPLOY_SERVER=$DEPLOY_SERVER_STAGING
SSH_PRIVATE_KEY=$SSH_PRIVATE_KEY_STAGING
SERVER_FOLDER="front"

#echo "Deploying to ${DEPLOY_SERVER}"
scp -o StrictHostKeyChecking=no -r ../ipc-2022/  user-ipcstaging@${DEPLOY_SERVER}:/var/www/html/webserver-ipc/${SERVER_FOLDER}

ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null user-ipcstaging@${DEPLOY_SERVER} "cd /var/www/html/webserver-ipc/front/PRE-Deploy && ./deploy.sh"
