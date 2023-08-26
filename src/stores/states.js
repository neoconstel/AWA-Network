import { defineStore } from "pinia"; // defineStore creates a new store

// defineStore(storeID, properties for interacting with state)
export default defineStore("portfolio", {
  state: () => ({
    artist: "",
  }),
});
