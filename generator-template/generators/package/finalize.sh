#! /bin/sh

while getopts ":n:" opt; do
  case $opt in
    n) PACKAGE_NAME="$OPTARG"
    ;;
    \?) echo "Invalid option -$OPTARG" >&2
    ;;
  esac
done

echo "Finalizing package : $PACKAGE_NAME";
yarn reset

echo "Creating config symlinks : $PACKAGE_NAME";
cd packages/$PACKAGE_NAME
rm -rf .vscode flowcoverage.json .prettierignore .eslintignore;
ln -s ../../tools-configuration/flowcoverage.json flowcoverage.json;
ln -s ../../tools-configuration/.prettierignore .prettierignore;
ln -s ../../tools-configuration/.eslintignore;
ln -s ../../.vscode .vscode
ln -s ../../.nvmrc .nvmrc

echo "Running prettier : $PACKAGE_NAME";
yarn run prettier "**/*.js" --write

echo "DONE ! - Please add $PACKAGE_NAME inside .storybook/config.js";
