# Folders structure

### Folders structure

Folder structure varies by build system and programming language. Here are some standard conventions:

- **src/** - "Source" files to build and develop the project. This is where the original source files are located, before being compiled into fewer files to dist/, public/ or build/.

- **dist/** - "Distribution", the compiled code/library, also named public/ or build/. The files meant for production or public use are usually located here.

    - **dist/** - Is a production-ready compiled version of your code.

    - **build/** - Is a compiled version of your src/ but not a production-ready.

    - **public/** - Usually used as the files runs on the browser. which it may be the server-side JS and also include some HTML and CSS.

- **assets/** - Static content like images, video, audio, fonts etc.

- **lib/** - External dependencies (when included directly).

- **node_modules/** - Includes libraries and dependencies for JS packages, used by Npm.

- **vendor/** - Includes libraries and dependencies for PHP packages, used by Composer.

- **bin/** - Files that get added to your PATH when installed.

- **test/** - The project's tests scripts, mocks, etc.

### Files structure

Markdown/Text Files:

- **README.md** - A help file which addresses setup, tutorials, and documents the project.

- **LICENSE.md** - Any rights given to you regarding the project. Sometimes this is addressed in the README.md file.

- **CONTRIBUTING.md** - How to help out with the project. Sometimes this is addressed in the README.md file.

- **CHANGELOG.md** - A list of changes made to the project. This is usually used to keep track of the changes made to the project.

- **CODE_OF_CONDUCT.md** - A code of conduct for the project. This is a set of rules that the project maintainers are expected to follow.

- **SECURITY.md** - A security policy for the project. This is a set of rules that the project maintainers are expected to follow.

Specific files:

- **.gitattributes:** - Specifies which files should be normalized and how they should be treated under different systems.

- **.gitignore:** - Specification of the files meant to be ignored by Git.

- **package.json** - Defines libraries and dependencies for JS packages, used by Npm.

- **package-lock.json** - Specific version lock for dependencies installed from package.json, used by Npm.

- **composer.json** - Defines libraries and dependencies for PHP packages, used by Composer.

- **composer.lock** - Specific version lock for dependencies installed from composer.json, used by Composer.

- **webpack.config.js:** - Used to define functions and tasks to be run with Webpack.

- **gulpfile.js** - Used to define functions and tasks to be run with Gulp.
