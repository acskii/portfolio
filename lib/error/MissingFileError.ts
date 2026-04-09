export class MissingFileError extends Error {
  constructor(file: string) {
    super(`${file} is missing from drive!`);
    this.name = "MissingFileError";
  }
}