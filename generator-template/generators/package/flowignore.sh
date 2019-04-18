#! /bin/sh

# This scripts fix flow for mono-repo architectures by adding proper ignore statements
echo "Creating flow ignores in all packages";

while getopts ":n:" opt; do
  case $opt in
    n) PACKAGE_NAME="$OPTARG"
    ;;
    \?) echo "Invalid option -$OPTARG" >&2
    ;;
  esac
done

echo $PACKAGE_NAME;

# Create all ignores in new package flowconfig
find packages -maxdepth 1 -type d -not -path "packages/$PACKAGE_NAME" -not -path "packages" -execdir echo ".*/{}/src/.*" \; -execdir echo ".*/{}/flow-typed/.*" \; >> flow-ignore.txt
sed -i.bak '/\[ignore\]/r flow-ignore.txt' packages/$PACKAGE_NAME/.flowconfig
rm flow-ignore.txt

# Complete all other packages .flowconfig with new package
for FOLDER_PATH in packages/* ; do
  if [ "$FOLDER_PATH" != "packages/$PACKAGE_NAME" ]; then
    echo ".*/$PACKAGE_NAME/src/.*" >> flow-ignore.txt
    echo ".*/$PACKAGE_NAME/flow-typed/.*" >> flow-ignore.txt
    sed -i.bak '/\[ignore\]/r flow-ignore.txt' $FOLDER_PATH/.flowconfig
    rm flow-ignore.txt
  fi
done

# Remove all back files
rm -rf packages/*/.flowconfig.bak
