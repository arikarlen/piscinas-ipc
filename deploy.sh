#!/bin/bash

DEPLOY_SERVER=$DEPLOY_SERVER_DEVELOP
SSH_PRIVATE_KEY=$SSH_PRIVATE_KEY_DEVELOP
SERVER_FOLDER="front"

#Ejecución remota de script en VM para deploys continuos
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null user-ipcdevelop@${DEPLOY_SERVER} "cd /var/www/html/webserver-ipc/front/PRE-Deploy && ./deploy.sh"
