import * as vscode from "vscode";
import { createFolderWithFiles } from "commands";
import { RegisterCommandCallbackArgs } from "types";

export function activate(context: vscode.ExtensionContext) {
  const createFolderWithFilesCommand = vscode.commands.registerCommand(
    "react-files-generator.createFolderWithFiles",
    (args: RegisterCommandCallbackArgs) => createFolderWithFiles(args)
  );

  context.subscriptions.push(createFolderWithFilesCommand);
}
