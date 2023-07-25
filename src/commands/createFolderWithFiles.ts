// import * as vscode from "vscode";
import { getTextFromPrompt, getWorkspaceUri, showError } from "helpers";
import { RegisterCommandCallbackArgs } from "types";
import { FileSystem } from "classes";

export const createFolderWithFiles = async (
  args: RegisterCommandCallbackArgs
) => {
  const name = await getTextFromPrompt(
    "Enter the name of folder to create",
    "Enter name"
  );
  const workspaceUri = await getWorkspaceUri();
  const path = args ? args.path : workspaceUri?.path;

  if (path) {
    if (name) {
      const fileSystem = new FileSystem(path, name);

      fileSystem.createFolder();
    } else {
      showError("Error occured while getting folder name");
    }
  } else {
    showError("Can not detect folder path");
  }
};
