#!/bin/bash
set -e

# New storybook
yarn build-storybook-$1
yarn build-standalone:$1

git checkout releases

git config --global user.email "{email}"
git config --global user.name "{username}"
git fetch
git reset --hard origin/releases

rm -rf www-$1/www/storybook
mkdir -p www-$1/www
mv storybook-static www-$1/www/storybook

rm -rf www-$1/www/standalone
mkdir -p www-$1/www/standalone
mv ./packages/smartbot/build/$1 www-$1/www/standalone/smartbot

git add www-$1
git diff-index HEAD
git diff-index --quiet HEAD || git commit -m "Chore(storybook & standalone): Auto deploy [ci skip]" --amend
git push -f origin releases
