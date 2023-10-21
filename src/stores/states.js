import { defineStore } from "pinia"; // defineStore creates a new store
import { useLocalStorage } from "@vueuse/core"; // for persistence after refresh

// defineStore(storeID, properties for interacting with state)
export default defineStore("data", {
  state: () => ({
    user: useLocalStorage("user", {}),
    work: {},
    worksDatabase: [],
    currentView: "",
    testUser: {
      username: "wandhero",
      name: "Harry Potter",
      email: "harry@gmail.com",
      password: "hogwarts",
      likes: 3571,
      views: 8596,
      comments: 16339,
      followers: 2174,
      following: 318,
    },
    allowTestUser: useLocalStorage("allowTestUser", false),
  }),
});
