# ASP.NET Core with webpack and aurelia 

This is stiched together based on [ASP.NET JavasriptServices](https://github.com/aspnet/JavaScriptServices) (through yeoman aspnetcore-spa) and [aurelia's skeleton-typescript-webpack](https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-typescript-webpack)

This is far from complete

## Why not webpack 2
It is actually AspNet.JavascriptServices which runs webpack during development, and they have their own webpack version.

## Why not @easy-webkit/config-sass
It didnt play well with webpack 1.

## Why the inline aurelia-webpack-hot-reload-plugin?
https://github.com/aurelia/webpack-plugin/issues/65
 
## Missing things
- Different environments
- Test setup
- CSS loader wont work
- Script hotload (requires some changes to aurelia)
