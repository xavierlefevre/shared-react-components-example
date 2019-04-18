#!/bin/bash
set -e

# New storybook
yarn docz:build

git checkout releases

# No need to switch user as it is not from the CI (for now)
# git config --global user.email "{email}"
# git config --global user.name "{username}"
git fetch
git reset --hard origin/releases

rm -rf www-$1/www/documentation
mkdir -p www-$1/www
mv docz-static www-$1/www/documentation

git add www-$1
git diff-index HEAD
git diff-index --quiet HEAD || git commit -m "Chore(documentation): Auto deploy $1 [ci skip]"
git push origin releases

git checkout master
