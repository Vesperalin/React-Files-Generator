import { existsSync, mkdirSync } from "fs";
import { showError } from "helpers";

export class FileSystem {
  path: string;
  name: string;

  constructor(path: string, name: string) {
    this.path = path;
    this.name = name;
  }

  createFolder() {
    if (!existsSync(`${this.path}/${this.name}`)) {
      mkdirSync(`${this.path}/${this.name}`);
    } else {
      showError("Folder already exists");
    }
  }
}
