import * as vscode from "vscode";
import { getWorkspaceUri } from "helpers";

export const createFolderWithFiles = async () => {
  const workspaceUri = await getWorkspaceUri();
  console.log(workspaceUri);

  // vscode.workspace.updateWorkspaceFolders(1, undefined, {
  //   uri: vscode.Uri.parse("/extension_test"),
  //   name: "New Folder",
  // });
};
