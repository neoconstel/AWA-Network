import { defineStore } from "pinia"; // defineStore creates a new store

// defineStore(storeID, properties for interacting with state)
export default defineStore("data", {
  state: () => ({
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
    allowTestUser: false,
  }),
});
