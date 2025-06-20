
rshaw@Rich MINGW64 /c/HTML backup/blog website
$ npm innit
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (blog-website)
version: (1.0.0)                                                                                                                                                                                                              
description:                                                                                                                                                                                                                  
entry point: (index.js)                                                                                                                                                                                                       
test command: jest                                                                                                                                                                                                            
git repository:                                                                                                                                                                                                               
keywords: blog javascript                                                                                                                                                                                                     
author: shawrich                                                                                                                                                                                                              
license: (ISC)                                                                                                                                                                                                                
About to write to C:\HTML backup\blog website\package.json:

{
  "name": "blog-website",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [
    "blog",
    "javascript"
  ],
  "author": "shawrich",
  "license": "ISC",
  "description": ""
}


Is this OK? (yes)

rshaw@Rich MINGW64 /c/HTML backup/blog website
$ touch server.js app.js 

rshaw@Rich MINGW64 /c/HTML backup/blog website
$ mkdir controllers routes models utils config middleware 

 cd config

rshaw@Rich MINGW64 /c/HTML backup/blog website/config
$ touch config.env example.config.env database.js 

rshaw@Rich MINGW64 /c/HTML backup/blog website/config
$ cd ..

rshaw@Rich MINGW64 /c/HTML backup/blog website
$ touch .gitignore

rshaw@Rich MINGW64 /c/HTML backup/blog website
$ git innit
git: 'innit' is not a git command. See 'git --help'.

The most similar command is
        init

rshaw@Rich MINGW64 /c/HTML backup/blog website
$ git init
Initialized empty Git repository in C:/HTML backup/blog website/.git/

rshaw@Rich MINGW64 /c/HTML backup/blog website (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        app.js
        config/
        notes.md
        package.json
        server.js

nothing added to commit but untracked files present (use "git add" to track)

rshaw@Rich MINGW64 /c/HTML backup/blog website (master)
$ cd config

rshaw@Rich MINGW64 /c/HTML backup/blog website/config (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../.gitignore
        ../app.js
        ./
        ../notes.md
        ../package.json
        ../server.js

nothing added to commit but untracked files present (use "git add" to track)


to get git ignore we need to go https://www.toptal.com/developers/gitignore and type node and get the file and past it in gitignore

rshaw@Rich MINGW64 /c/HTML backup/blog website/config (master)
$ cd models
bash: cd: models: No such file or directory

rshaw@Rich MINGW64 /c/HTML backup/blog website/config (master)
$ cd ../

rshaw@Rich MINGW64 /c/HTML backup/blog website (master)
$ cd models

rshaw@Rich MINGW64 /c/HTML backup/blog website/models (master)
$ touch user.model.js blog.model.js

rshaw@Rich MINGW64 /c/HTML backup/blog website/models (master)
$ cd ../routes

rshaw@Rich MINGW64 /c/HTML backup/blog website/routes (master)
$ touch user.route.js blog.route.js

rshaw@Rich MINGW64 /c/HTML backup/blog website/routes (master)
$ cd ../controllers

rshaw@Rich MINGW64 /c/HTML backup/blog website/controllers (master)
$ touch user.controllers.js blog.controllers.js

rshaw@Rich MINGW64 /c/HTML backup/blog website/controllers (master)
$