import { resolve } from 'path';
import { runTests } from '@vscode/test-electron';

async function main() {
	try {
		const extensionDevelopmentPath = resolve(__dirname, '../../');
		const extensionTestsPath = resolve(__dirname, './suite/index');

		await runTests({ extensionDevelopmentPath, extensionTestsPath });
	} catch (err: unknown) {
		// eslint-disable-next-line no-console
		console.error('Failed to run tests', err);
		process.exit(1);
	}
}

void main();
