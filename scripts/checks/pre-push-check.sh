#!/bin/bash
set -e

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
if [ "$branch" == "master" ] || [ "$branch" == "develop" ]
then
    yarn && yarn test
else
    yarn test:prettier && yarn test:lint
fi
