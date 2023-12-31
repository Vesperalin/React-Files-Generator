import { window, workspace } from 'vscode';

export const showError = async (message: string) => {
	await window.showErrorMessage(message);
};

export const showInfo = async (message: string) => {
	await window.showInformationMessage(message);
};

export const getWorkspaceUri = async () => {
	const { workspaceFolders } = workspace;

	if ((workspaceFolders?.length || 0) > 1) {
		return (
			await window.showWorkspaceFolderPick({
				placeHolder: 'Select Workspace in which you want to create the folder',
			})
		)?.uri;
	}
	return workspaceFolders?.[0]?.uri;
};

export const getTextFromPrompt = async (
	text: string,
	placeholderText: string | undefined
) => {
	const inputValue = await window.showInputBox({
		ignoreFocusOut: true,
		prompt: text,
		...(placeholderText && { placeHolder: placeholderText }),
	});

	return inputValue;
};
