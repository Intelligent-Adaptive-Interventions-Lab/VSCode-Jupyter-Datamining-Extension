// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const { countCodeCells } = require('./utils/execCount');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	notebookController = vscode.notebooks.createNotebookController('test', 'test', 'test', (cells, _notebook, _controller) => {
		console.log(cells);
		console.log(_notebook);
		console.log(_controller);
	});

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "student-notebook-tracer" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('student-notebook-tracer.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Student Notebook Tracer!');
	});

	const execCountCommand = vscode.commands.registerCommand('student-notebook-tracer.execCount', function () {
		countCodeCells();
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(execCountCommand);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
