#!/usr/bin/env sh
set -e

# build
npm run build

# navigate into the build output directory
cd site/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ccarral/ccarral.github.io.git master

cd -
