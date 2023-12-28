const vscode = require('vscode');

let operationalize_status_bar_item;
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    let disposable = vscode.commands.registerCommand('operationalize-code-ext.optTest', () => {
        vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);

	console.log('Congratulations, your extension "operationalize" is now active!');
	operationalize_status_bar_item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	context.subscriptions.push(operationalize_status_bar_item);
	update_status_bar_item();
}

// This method is called when your extension is deactivated
function deactivate() {}

function update_status_bar_item() {
	operationalize_status_bar_item.text = "Operationalize";
	operationalize_status_bar_item.show();
}

module.exports = {
	activate,
	deactivate
}
