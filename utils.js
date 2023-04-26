import { Client, Databases } from "appwrite";
const client = new Client();
const databases = new Databases(client);
client
  .setEndpoint(
    "https://8080-appwrite-integrationfor-vscej96iekp.ws-eu95.gitpod.io/v1"
  ) // Your API Endpoint
  .setProject("643bc171521ce38501dd"); // Your project ID
export const getPost = databases.listDocuments(
  "OUR_DATABASE_ID",
  "OUR_COLLECTION_ID"
);
