import { defineStore } from "pinia"; // defineStore creates a new store
import { useLocalStorage } from "@vueuse/core"; // for persistence after refresh

// defineStore(storeID, properties for interacting with state)
export default defineStore("data", {
  state: () => ({
    user: useLocalStorage("user", {}),
    work: {},
    currentView: "",
    darkTheme: useLocalStorage("darkTheme", true),
  }),
});
