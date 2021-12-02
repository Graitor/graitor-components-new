Maintenance
-

For contributors: \
All magic happens in the lib folder, all components need to be exported in the lib/index.js
Include a showcase of each component in the App.js file and in README.

Build & Publish
- login to your yarn account in terminal
- run following command from the root of the folder
```
yarn build && yarn publish
```
- you will be prompted with entering new version name

Upgrade the package in all projects
- to upgrade a package run following command
```
yarn upgrade graitor-components@latest
```
- sometimes you will have to restart running application to activate new version
