#!/bin/bash
set -e

yarn lerna publish patch --npm-client npm --dist-tag dev --canary --preid dev --yes --no-git-tag-version --no-push --exact  --registry {your verdaccio url}/

# Pushing a tag to be used by lerna --since
last_commit_hash=$(git rev-parse --verify HEAD)

git tag -a "@shared-components@$last_commit_hash" -m "CI passed at commit $last_commit_hash"
git push --tags
