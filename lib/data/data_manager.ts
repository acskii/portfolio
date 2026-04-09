import GoogleDriveManager from "../drive/google_drive";
import { DriveFileEntry } from "../drive/types";
import { MissingFileError } from "../error/MissingFileError";
import ContactMapper, { type ContactType } from "./mapper/ContactMapper";

class DataManager {
    private driveManager : GoogleDriveManager;
    private root : DriveFileEntry[] = [];
    private cache: Map<string, any> = new Map();
    private lastRefresh: number = 0;

    /* FILE NAMES IN DRIVE */
    private CONTACT_FILE = "contact.json";
    
    constructor() {
        this.driveManager = new GoogleDriveManager();
    }

    /* Load folder manifest from drive */
    async load() {
        this.root = await this.driveManager.getRootContent();
        this.lastRefresh = Date.now();
        this.cache.clear();
    }

    /* Gets JSON file content from drive */
    private async getJSON(fileName: string) : Promise<any> {
        if (this.cache.has(fileName)) {
            return this.cache.get(fileName);
        }

        const entry = this.root.find(f => f.name == fileName);
        if (!entry) {
            // file is not added in the drive
            throw new MissingFileError(fileName);
        }

        const content = await this.driveManager.getJSONFile(entry.id);
        this.cache.set(fileName, content);

        return content;
    }

    async getContact() {
        const json = await this.getJSON(this.CONTACT_FILE);
        return json.map((c: any) => ContactMapper.map(c.contact as ContactType));
    }
};

export default new DataManager();