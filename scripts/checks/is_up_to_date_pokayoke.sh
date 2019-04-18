[ $(git fetch) ] || echo "Checking if your build is up-to-date"
echo $(git rev-parse HEAD)
echo $(git rev-parse @{u})
if [ $(git rev-parse HEAD) != $(git rev-parse @{u}) ]
then 
    echo "Cancelling: others commits have been added to master in the meantime"
    exit 1
fi