#! /bin/bash

if [ -z "$1" ]; then
    FILE_NAME="mern-template"
else
    FILE_NAME="$1"
fi;

git clone --depth=1 https://github.com/kaxi1993/mern-template.git $FILE_NAME
rm -rf ./$FILE_NAME/.git
