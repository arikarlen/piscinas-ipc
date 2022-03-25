#!/bin/bash

DEPLOY_SERVER=$DEPLOY_SERVER_PROD
SSH_PRIVATE_KEY=$SSH_PRIVATE_KEY_PROD
SERVER_FOLDER="front"

#Ejecución remota de script para deploys automáticos
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null ipc-user-prod@${DEPLOY_SERVER} "cd /var/www/html/webserver-ipc/front/PRE-Deploy && ./deploy.sh"
