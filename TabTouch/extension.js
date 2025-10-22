const vscode = require('vscode');

function activate(context) {
  let nextTab = vscode.commands.registerCommand('extension.nextTab', () => {
    vscode.commands.executeCommand('workbench.action.nextEditor');
  });
  let openCopilot = vscode.commands.registerCommand('extension.openCopilot', () => {
    vscode.commands.executeCommand('github.copilot.chat.focus');
  });
  let toggleTerminal = vscode.commands.registerCommand('extension.toggleTerminal', () => {
    vscode.commands.executeCommand('workbench.action.terminal.toggleTerminal');
  });
  let toggleNewWindow = vscode.commands.registerCommand('extension.newWindow', () => {
    vscode.commands.executeCommand('workbench.action.newWindow');
  });
  let toggleNewUntitledFile = vscode.commands.registerCommand('extension.newUntitledFile', () => {
    vscode.commands.executeCommand('workbench.action.newUntitledFile');
  });
  let prevTab = vscode.commands.registerCommand('extension.prevTab', () => {
    vscode.commands.executeCommand('workbench.action.previousEditor');
  });

    context.subscriptions.push(nextTab, prevTab, openCopilot, toggleTerminal, toggleNewWindow, toggleNewUntitledFile);
}

  function deactivate() {}

  module.exports = { activate, deactivate };
