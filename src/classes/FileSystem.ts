import { existsSync, mkdirSync, appendFile } from 'fs';
import { showError } from 'helpers';

export class FileSystem {
	path: string;

	name: string;

	static DEFAULT_FILES_SCHEMA = [
		'index.ts',
		'<name>.styles.ts',
		'<name>.test.tsx',
		'<name>.tsx',
		'<name>.types.ts',
	];

	constructor(path: string, name: string) {
		this.path = path;
		this.name = name;
	}

	async createFolder() {
		if (!existsSync(`${this.path}/${this.name}`)) {
			mkdirSync(`${this.path}/${this.name}`);
		} else {
			await showError('Folder already exists');
		}
	}

	createFiles() {
		FileSystem.DEFAULT_FILES_SCHEMA.forEach((fileSchema) => {
			const fileName = fileSchema.replace('<name>', this.name);

			if (existsSync(`${this.path}/${this.name}`)) {
				const filePath = `${this.path}/${this.name}/${fileName}`;

				if (!existsSync(filePath)) {
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					appendFile(filePath, '', async (err) => {
						if (err) {
							await showError(`Failed to create ${fileName}`);
						}
					});
				}
			}
		});
	}
}
