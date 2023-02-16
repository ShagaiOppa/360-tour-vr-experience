import { GetSignedUrlConfig, Storage } from '@google-cloud/storage';

// Creates a client
const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY,
    },
});

async function generateV4ReadSignedUrl(fileName: string) {
    // These options will allow temporary read access to the file
    const options: GetSignedUrlConfig = {
        version: 'v4',
        action: 'read',
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    };

    // Get a v4 signed URL for reading the file
    const [url] = await storage
        .bucket(process.env.BUCKET_NAME)
        .file(fileName)
        .getSignedUrl(options);

    return url
}

export { generateV4ReadSignedUrl }