# Push package builds to Github, for them to be later retrieved by the script which publishes them to the Verdaccio.
# The goal is to avoid wasting time rebuilding them in the HVD.

git checkout -b package-builds-$1

# The build files are normally ignored by git (in .gitignore). --force lets us add them to git anyway.
git add --force packages/*/build
git commit -m "chore(verdaccio): add packages built by the CI [ci skip]"

# The "package-builds-dev" / "package-builds-prod" branch already exists on Github. --force is needed to replace it with our new branch, which contains the latest version of the package builds.
# --no-verify is used to avoid unnecessarily running the prettier and linter test before pushing.
git push --force --no-verify --set-upstream origin package-builds-$1
