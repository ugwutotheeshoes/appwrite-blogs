import { Client, Databases } from "appwrite";
const client = new Client();
const databases = new Databases(client);
client
  .setEndpoint(
    "https://8080-appwrite-integrationfor-gokvfr7jpi0.ws-eu96.gitpod.io/v1"
  ) // Your API Endpoint
  .setProject("64505c77c46aa32958ef"); // Your project ID
export const getPost = databases.listDocuments(
  "64505c8a8712443d4d22",
  "64505cb6402cf8e51b6c",
  // "645064fa818e2bfb97d7",
);
