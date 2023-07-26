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

	createFolder() {
		if (!existsSync(`${this.path}/${this.name}`)) {
			mkdirSync(`${this.path}/${this.name}`);
		} else {
			showError('Folder already exists');
		}
	}

	createFiles() {
		FileSystem.DEFAULT_FILES_SCHEMA.forEach((fileSchema) => {
			const fileName = fileSchema.replace('<name>', this.name);

			if (existsSync(`${this.path}/${this.name}`)) {
				const filePath = `${this.path}/${this.name}/${fileName}`;

				if (!existsSync(filePath)) {
					appendFile(filePath, '', (err) => {
						if (err) {
							showError(`Failed to create ${fileName}`);
						}
					});
				}
			}
		});
	}
}
