import { createStore } from "framework7/lite";
import { writable } from "svelte/store";

import {
  APPWRITE_DATABASE_ID,
  APPWRITE_PROJECT,
  APPWRITE_ENDPOINT,
} from "./constants";
import { Client, Databases, ID } from "appwrite";

export let dropoffStore = writable("");
export const businessLocationStore = writable("");
export const dropoffLocationStore = writable("");
export const currentMenuItem = writable("");
export let foodStore = writable("");
export const account_type = writable("");
export const user_name = writable("");
export const user_email = writable("");

const client = new Client();
client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);
const databases = new Databases(client);

//getter function
export const getDocuments = async (collectionId) => {
  try {
    return await databases.listDocuments(APPWRITE_DATABASE_ID, collectionId);
  } catch (error) {
    console.error(
      "Store.js create error while getting documents from DB: ",
      error
    );
  }
};

//create order
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
      "Store.js create error while getting documents from DB: ",
      error
    );
  }
};

const store = createStore({
  state: {
    products: [
      {
        id: "1",
        title: "Apple iPhone 8",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.",
      },
      {
        id: "2",
        title: "Apple iPhone 8 Plus",
        description:
          "Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!",
      },
      {
        id: "3",
        title: "Apple iPhone X",
        description:
          "Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.",
      },
    ],
  },
  getters: {
    products({ state }) {
      return state.products;
    },
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
});
export default store;
