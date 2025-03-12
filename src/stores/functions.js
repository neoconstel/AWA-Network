import { defineStore } from "pinia"; // defineStore creates a new store
import { useLocalStorage } from "@vueuse/core"; // for persistence after refresh

// defineStore(storeID, properties for interacting with state)
export default defineStore("methods", {
  state: () => ({
    formatDate(dateString, includeWeekday = false) {
      /** converts a python timestamp from the format: 2025-03-12T13:29:43Z
       * to the form: Wednesday, March 12
       *
       * @includeWeekday: includes weekday (e.g Wednesday) if true.
       */
      const date = new Date(dateString);
      const options = { month: "long", day: "numeric" };

      if (includeWeekday) {
        options.weekday = "long"; // Add weekday if requested
      }

      let formattedDate = date.toLocaleString("en-US", options);

      // Get the day with the correct ordinal suffix (st, nd, rd, th)
      const day = date.getUTCDate();
      const suffix = getOrdinalSuffix(day);

      formattedDate = formattedDate.replace(/\d+/, day + suffix);
      return formattedDate;
    },
    otherFunc() {
      // do something
    },
  }),
});

function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
