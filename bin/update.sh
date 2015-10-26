#!/usr/bin/env bash

git clone --depth=1 --branch=master https://github.com/alexeybondarenko/simple-webapp.git generators/app/templates
git add -A
git commit -am "updated template"
git push
