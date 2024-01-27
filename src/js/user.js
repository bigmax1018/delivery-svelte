import { writable } from "svelte/store";
import { ID } from "appwrite";
import { account } from "./appwrite";
import { USERROLE_CUSTOMER } from "./constants";

// Avoid auth calls in server-side, so that a user is not shared between requests
const isBrowser = typeof window !== "undefined";

const createUser = () => {
  const store = writable(null);

  async function init() {
    if (!isBrowser) return;
    try {
      store.set(await account.get());
    } catch (e) {
      store.set(null);
    }
  }

  init();

  //   async function register(email, password) {
  //     if (!isBrowser) return;
  //     await account.create(ID.unique(), email, password);
  //     await login(email, password);
  //   }
  async function register(email, password, userRole = USERROLE_CUSTOMER) {
    if (!isBrowser) return;
    const userId = ID.unique();
    await account.create(userId, email, password, userRole);
    await login(email, password);
  }

  async function login(email, password) {
    if (!isBrowser) return;
    await account.createEmailSession(email, password);
    await init();
  } // Redirect to home page after login

  async function logout() {
    await account.deleteSession("current");
    store.set(null);
    goto("/");
  }

  async function googleLogin() {
    try {
      // Call Appwrite's OAuth login method with the provider 'google'
      const response = await account.createOAuth2Session("google");
      console.log(response);
      // Redirect to the Google OAuth page
      window.location.href = "/"; // Update with your route
    } catch (error) {
      console.error("Google login error:", error);
    }
  }

  return {
    // Exposes the store's value with $user
    subscribe: store.subscribe,
    register,
    login,
    logout,
    init,
    googleLogin,
  };
};

export const user = createUser();
