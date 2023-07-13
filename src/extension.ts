import { commands, ExtensionContext } from "vscode";
import { createFolderWithFiles } from "commands";
import { RegisterCommandCallbackArgs } from "types";

export function activate(context: ExtensionContext) {
  const createFolderWithFilesCommand = commands.registerCommand(
    "react-files-generator.createFolderWithFiles",
    (args: RegisterCommandCallbackArgs) => createFolderWithFiles(args)
  );

  context.subscriptions.push(createFolderWithFilesCommand);
}
