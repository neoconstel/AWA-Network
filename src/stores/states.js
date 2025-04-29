import { defineStore } from "pinia"; // defineStore creates a new store
import { useLocalStorage } from "@vueuse/core"; // for persistence after refresh

// defineStore(storeID, properties for interacting with state)
export default defineStore("data", {
  state: () => ({
    user: useLocalStorage("user", {}),
    work: {}, // old name for 'artwork'. Still leave here for any component that hasn't been updated to the new name
    artwork: {}, // updated name from 'work'
    currentView: "",
    darkTheme: useLocalStorage("darkTheme", true),
    siteConfigs: useLocalStorage("siteConfigs", {}),
    seller: useLocalStorage("seller", {}),
  }),
});
