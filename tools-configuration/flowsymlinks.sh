#! /bin/sh

# This scripts fix flow for mono-repo architectures by creating symlinks
# from root node_nodules into packages node_modules

for FOLDER_PATH in packages/*/ ; do
    yarn flow-mono create-symlinks $FOLDER_PATH.flowconfig
done
