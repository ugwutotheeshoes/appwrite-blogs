import { Client, Databases } from "appwrite";
const client = new Client();
const databases = new Databases(client);
client
  .setEndpoint("OUR_API_ENDPOINT") // Your API Endpoint
  .setProject("OUR_PROJECT_ID"); // Your project ID
export const getPost = databases.listDocuments(
  "OUR_DATABASE_ID",
  "OUR_COLLECTION_ID",
  "OUR_DOCUMENT_ID"
);
