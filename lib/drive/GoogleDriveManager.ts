import { google, drive_v3 } from 'googleapis';
import { DriveFileEntry } from './types';
import { MissingRootError } from '../error/MissingRootError';

export default class GoogleDriveManager {
    private drive: drive_v3.Drive;
    private readonly ROOT_ID = process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID;

    constructor() {
        const auth = new google.auth.JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/drive.readonly']
        });
        
        this.drive = google.drive({ version: 'v3', auth });
    }

    /* Lists files within a specific folder */
    async getFolderContent(folderId: string) : Promise<DriveFileEntry[]> {
        const res = await this.drive.files.list({
            q: `'${folderId}' in parents and trashed = false`,
            fields: 'files(id, name, mimeType, modifiedTime)',
        });

        return (res.data.files as DriveFileEntry[]) || [];
    }

    /* Retrieves JSON file content */
    /* Pass type to choose attributes to be returned based on file ID */
    async getJSONFile<T>(fileId: string) : Promise<T> {
        const res = await this.drive.files.get(
            { fileId, alt: 'media' },
            { responseType: 'json' }
        );

        return res.data as T;
    }

    // Helper Functions
    /* Check if entry is a file or folder */
    isFolder(entry: DriveFileEntry) : boolean {
        return entry.mimeType == "application/vnd.google-apps.folder";
    }

    /* Get folder content of the root directory folder */
    async getRootContent() : Promise<DriveFileEntry[]> {
        if (!this.ROOT_ID) {
            throw new MissingRootError();
        }

        return await this.getFolderContent(this.ROOT_ID); 
    }
};