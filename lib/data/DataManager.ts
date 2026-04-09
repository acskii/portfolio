import GoogleDriveManager from "../drive/GoogleDriveManager";
import { DriveFileEntry } from "../drive/types";
import { MissingFileError } from "../error/MissingFileError";
import AboutMapper, { AboutItemType } from "./mapper/AboutMapper";
import ContactMapper, { type ContactType } from "./mapper/ContactMapper";

class DataManager {
    private driveManager : GoogleDriveManager;
    private root : DriveFileEntry[] = [];
    private cache: Map<string, any> = new Map();
    private refreshTime: number = 60 * 60 * 1000;   // 1 hour
    private lastRefresh: number = 0;

    /* FILE NAMES IN DRIVE */
    private CONTACT_FILE = "contact.json";
    private ABOUT_FILE = "about.json";
    
    constructor() {
        this.driveManager = new GoogleDriveManager();
    }

    /* Load folder manifest from drive */
    async load() {
        // Only reload from google drive manager if data is stale or on initialisation
        if (this.lastRefresh == 0 || Date.now() >= (this.lastRefresh + this.refreshTime)) {
            this.root = await this.driveManager.getRootContent();
            this.lastRefresh = Date.now();
            this.cache.clear();
        }
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

    async getAbout() {
        const json = await this.getJSON(this.ABOUT_FILE);
        return {
            "about": json.info.map((c: any) => AboutMapper.map(c as AboutItemType)),
            "bio": json.bio
        };
    }
};

export default new DataManager();