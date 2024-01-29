import {
  APPWRITE_DATABASE_ID,
  APPWRITE_PROJECT,
  APPWRITE_ENDPOINT,
} from "./constants";
import { Client, Databases, ID } from "appwrite";

const client = new Client();
client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);
const databases = new Databases(client);

export const create = async (collectionId, data) => {
  try {
    await databases.createDocument(
      APPWRITE_DATABASE_ID,
      collectionId,
      ID.unique(),
      data
    );
  } catch (error) {
    console.error(
      "lotteries.js create error while creating document in DB:",
      error
    );
  }
};

export const getDocuments = async (collectionId) => {
  try {
    return await databases.listDocuments(APPWRITE_DATABASE_ID, collectionId);
  } catch (error) {
    console.error(
      "Lotteries.js create error while getting documents from DB: ",
      error
    );
  }
};

export const getFoodItem = async (collectionId, documentId) => {
  try {
    return await databases.getDocument(APPWRITE_DATABASE_ID, collectionId, documentId);
  } catch (error) {
    console.error(
      "Lotteries.js create error while getting documents from DB: ",
      error
    );
  }
};

export const deleteList = (database_id, collection_id, data) =>
  databases.deleteDocument(database_id, collection_id, data);