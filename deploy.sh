#!/bin/bash

DEPLOY_SERVER=$DEPLOY_SERVER_DEVELOP
SSH_PRIVATE_KEY=$SSH_PRIVATE_KEY_DEVELOP
SERVER_FOLDER="front"

#echo "Deploying to ${DEPLOY_SERVER}"
scp -o StrictHostKeyChecking=no -r ../ipc-2022/  user-ipcdevelop@${DEPLOY_SERVER}:/var/www/html/webserver-ipc/${SERVER_FOLDER}

ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null user-ipcdevelop@${DEPLOY_SERVER} "cd /var/www/html/webserver-ipc/front/PRE-Deploy && ./deploy.sh"
