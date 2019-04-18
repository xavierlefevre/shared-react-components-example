#!/bin/bash

# Deploy Storybook with the deployment kit. Meant to be called on a HVD on the Git server, after the package publication
#
# Note: we cannot execute the "deploy" command since "deploy" is actually a bash function only present in the .bashrc file
# We thus use the literal command the "deploy" function would execute.

cd ~/deployment-kit
REPO=shared-components ./node_modules/shipit-cli/bin/shipit $1 deploy
