import * as vscode from "vscode";
import { createFolderWithFiles } from "commands";

export function activate(context: vscode.ExtensionContext) {
  const createFolderWithFilesCommand = vscode.commands.registerCommand(
    "react-files-generator.createFolderWithFiles",
    createFolderWithFiles
  );

  context.subscriptions.push(createFolderWithFilesCommand);
}
