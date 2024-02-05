import {
    APPWRITE_DATABASE_ID,
    APPWRITE_PROJECT,
    APPWRITE_ENDPOINT,
  } from "./constants";
  import { Client, Databases, ID, Query } from "appwrite";

const client = new Client();
client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);
const databases = new Databases(client);

export const user_regist = async (collectionId, data) => {
    try {
      await databases.createDocument(
        APPWRITE_DATABASE_ID,
        collectionId,
        ID.unique(),
        data
      );
    } catch (error) {
      console.error(
        "profile.js create error while creating document in DB:",
        error
      );
    }
  };

  export const get_user = async (collectionId, documentId) => {
    try {
      return await databases.listDocuments(APPWRITE_DATABASE_ID, collectionId, [Query.equal("user_id", documentId)]);
    } catch (error) {
      console.error(
        "Lotteries.js create error while getting documents from DB: ",
        error
      );
    }
  };

