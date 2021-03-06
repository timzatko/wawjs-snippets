# wawjs-snippets

School pet project.

Distributing and installing Snippets for:

### JavaScript
- node.js APIs
- mocha
- ...
	
### Supported editors
- [Sublime Text 3](https://www.sublimetext.com/3)
- [Atom](https://atom.io/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation

1. Install one of the __supported editors__
1. `git clone https://github.com/timzatko/wawjs-snippets`
1. `cd wawjs-snippets`
1. Run `npm install` *(It will install all the dependencies, build snippets and install them to the installed editors)*

### Installer cannot find my IDE

If the installer cannot find location of your IDE. Set path into environment variable with name `ATOM_HOME`, `VSCODE_HOME` or `SUBLIME_HOME`.    

## Development

1. Clone the repository `git clone https://github.com/timzatko/wawjs-snippets`
1. `cd wawjs-snippets`
1. `npm install`
1. Make changes, create new files, make fixes
1. Commit the changes and make pull request


### Adding new snippets

Add new snippets to the `./src` folder.
First line of the snippets contains snippet keyword trigger. The second one contains the snippet description. The rest of the file is snippet itself.

````javascript
// readFile
// wawjs - read text file

// path is relative to CWD
// if path is fd it will not be closed
fs.readFile(inPath, "UTF-8", (err, data) => {
    if (err) throw err;
});
````