#!/bin/bash
set -e

# Depending of rebase command:
# git rebase origin master
# git rebase master
# git rebase origin/master
# We want to check if args 1 and 2 contains 'master' or 'develop'
origin=$1
branch=$2

if [[ "$origin" = *"develop"* ]] || [[ "$branch" = *"develop"* ]];
then
    echo "pre-rebase hook: We don't want to rebase branch \"develop\" because it generates conflicts."
    exit 1
elif [[ "$origin" = *"master"* ]] || [[ "$branch" = *"master"* ]]
then
    echo "pre-rebase hook: WARNING if you already merged some commits of this branch on develop, rebasing branch master will cause conflicts. Cancel your rebase command, using git rebase --abort or git reflog."
fi
