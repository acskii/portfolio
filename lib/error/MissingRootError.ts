export class MissingRootError extends Error {
  constructor() {
    super("GOOGLE_DRIVE_ROOT_FOLDER_ID env variable not set!");
    this.name = "MissingRootError";
  }
}