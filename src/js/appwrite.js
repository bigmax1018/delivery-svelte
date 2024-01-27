import { Client, Databases, Account, Storage } from "appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT, APPWRITE_DATABASE_ID } from "./constants";

const client = new Client();
client.setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const  sdk  =  {  account, databases, storage, APPWRITE_DATABASE_ID };