# Troubleshooting

## Don't panic and yarn reset

If at any moment, you have a problem with your packages / dependencies / builds, of if tests do not behave locally like they behave on the CI, run `yarn reset`. This command will remove/re-install/re-build all packages and dependencies.

## My packages don't seem to be published

### The publication job on the CI succeeded

For some kind of errors, `lerna publish` does not output anything, but the new version is not published on Verdaccio. In that situation, you must connect to our Verdaccio server, and check Verdaccio and Nginx logs. Ask the SharedComponents team for help.

If the logs complain that your package is to large, [try to reduce its size](../development/how-to-optimize-a-package.md). If it's not enough, increase the max body size on both nginx and Verdaccio configuration files.

If the package does not appear on Verdaccio server, check if `private` is not set to `true` in the `package.json`

### The publication job on the CI failed

#### A possible cause

> Two PRs have been merged at the same time on master, and the CI launched the two "publish" steps at the same time. The first one published correctly on Verdaccio, but is not up-to-date on Git (since the 2nd PR was merged after). So the commit with the version bump was not pushed, and the published failed. In the meantime, the second build launched its publish, but finds out that a package has already been publish on Verdaccio at the same version, so it fails too.

**Solution**: There are 3 references used during the publication process for packages version: Verdaccio, Git, and the `package.json`; after a failed publish, they are de-synchronized, and need to be realigned. However it's a bad practice to **depublish** a version. Thus, we must upgrade/downgrade other references to match the Verdaccio version.

##### Steps to fix

- Check if the package has been publish on Verdaccio

`yarn info @shared-components/PACKAGE_NAME version`

- Compare the above version with the one in the `package.json`.

**If [Verdaccio v° > `package.json` v°]:**

- Bump manually the `package.json` version to equal the Verdaccio version.

- Merge on `master`.

**If [Verdaccio v° <= `package.json` v°]:**

- Delete the GitHub tag:

`git push origin :@shared-components/PACKAGE_NAME@VERSION`

e.g: `git push origin :@shared-components/smartbot@2.5.0`

- Rebuild on the CI to retrigger a publication, and XXX
