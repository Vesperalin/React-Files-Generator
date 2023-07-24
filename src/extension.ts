import * as vscode from "vscode";
import { createFolderWithFiles } from "commands";

export function activate(context: vscode.ExtensionContext) {
  const createFolderWithFilesCommand = vscode.commands.registerCommand(
    "react-files-generator.createFolderWithFiles",
    createFolderWithFiles
  );

  const test = vscode.commands.registerCommand(
    "react-files-generator.test",
    () => {
      vscode.window.showInformationMessage("Test");
    }
  );

  context.subscriptions.push(createFolderWithFilesCommand);
  context.subscriptions.push(test);
}
