#!/usr/bin/env bash

rm -rf generators/app/templates
git clone --depth=1 --branch=master https://github.com/alexeybondarenko/simple-webapp.git generators/app/templates
git add -A
git commit -am "updated template"
git push
