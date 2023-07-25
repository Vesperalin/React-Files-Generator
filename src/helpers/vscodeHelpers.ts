import * as vscode from "vscode";

export const showError = (message: string) => {
  vscode.window.showErrorMessage(message);
};

export const showInfo = (message: string) => {
  vscode.window.showInformationMessage(message);
};

export const getWorkspaceUri = async () => {
  if ((vscode.workspace.workspaceFolders?.length || 0) > 1) {
    return (
      await vscode.window.showWorkspaceFolderPick({
        placeHolder: "Select Workspace in which you want to create the folder",
      })
    )?.uri;
  }
  return vscode.workspace.workspaceFolders?.[0]?.uri;
};
