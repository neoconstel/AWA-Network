import { defineStore } from "pinia"; // defineStore creates a new store

// defineStore(storeID, properties for interacting with state)
export default defineStore("data", {
  state: () => ({
    work: {
      id: null,
      user: { name: "", username: "", views: null, likes: null },
      title: "",
      views: null,
      likes: null,
      thumbnail: "",
    },
    worksDatabase: [],
    currentView: "",
  }),
});
