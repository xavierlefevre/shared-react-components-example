echo '>>>>>>>>>>git checkout develop'
git checkout develop

echo '>>>>>>>>>>git reset --hard origin/develop'
git reset --hard origin/develop

echo '>>>>>>>>>>git merge master --no-edit'
if git merge master --no-edit; then
    git push --no-verify
else
    echo "Conflicts while merging master on develop. Please solve conflicts manually."
    exit 1
fi
