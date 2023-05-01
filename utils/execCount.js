const vscode = require('vscode');

function countCodeCells() {
    const editor = vscode.window.activeNotebookEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No active editor found.');
        return;
    }

    const notebook = editor.notebook;
    console.log(notebook)

    if (notebook.notebookType !== 'jupyter-notebook') {
        vscode.window.showErrorMessage('This command only works with Jupyter Notebooks.');
        return;
    }

    try {
        const cellCounts = notebook.getCells().map(cell => {
            if (cell.kind === vscode.NotebookCellKind.Code) {
                const metadata = cell.metadata
                console.log(metadata);
            }
        })
    } catch (err) {
        vscode.window.showErrorMessage('Error processing notebook: ' + err.message);
    }
}


exports.countCodeCells = countCodeCells;