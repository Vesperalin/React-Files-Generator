import * as vscode from "vscode";
import { getWorkspaceUri } from "helpers";
import { RegisterCommandCallbackArgs } from "types";

export const createFolderWithFiles = async (
  args: RegisterCommandCallbackArgs
) => {
  const workspaceUri = await getWorkspaceUri();
  console.log(workspaceUri);
  console.log(args);

  // vscode.workspace.updateWorkspaceFolders(1, undefined, {
  //   uri: vscode.Uri.parse("/extension_test"),
  //   name: "New Folder",
  // });
};
