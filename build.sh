#!/bin/sh

#Build Step!
echo "Building Production Leve Code!!\n"

cd nanosoft-app

npm run build

cd ../

echo "Building is Done!!\n"

#Copying Step!
echo "Copying the Compiled Code\n"

echo "Deleting Any Previous compiled-prod-code"

rm -rf ./compiled-prod-code

cp -r ./nanosoft-app/out ./compiled-prod-code

echo "Copying Done!!"

#CI CD Auto Deploment Step!
echo "Customizing CI CD\n"

cd ci-cd-automation

node custom-ci-cd.js

echo "Customizing CI CD Done!! Push Your Code!\n"



