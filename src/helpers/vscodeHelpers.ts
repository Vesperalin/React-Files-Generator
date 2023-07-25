import { window, workspace } from "vscode";

export const showError = (message: string) => {
  window.showErrorMessage(message);
};

export const showInfo = (message: string) => {
  window.showInformationMessage(message);
};

export const getWorkspaceUri = async () => {
  const { workspaceFolders } = workspace;

  if ((workspaceFolders?.length || 0) > 1) {
    return (
      await window.showWorkspaceFolderPick({
        placeHolder: "Select Workspace in which you want to create the folder",
      })
    )?.uri;
  }
  return workspaceFolders?.[0]?.uri;
};

export const getTextFromPrompt = async (
  text: string,
  placeholderText: string | undefined,
  errorText: string | undefined
) => {
  const inputValue = await window.showInputBox({
    ignoreFocusOut: true,
    prompt: text,
    ...(placeholderText && { placeHolder: placeholderText }),
  });

  if (!inputValue) {
    if (errorText) {
      showError(errorText);
    } else {
      showError("Cancelled due to an error");
    }
  }

  return inputValue;
};
