import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import i18next from "i18next";

// Define a mapping from numeric IDs to language codes
const languageMap: Record<number, string> = {
  1: "id", // Indonesian
  2: "en", // English
  3: "cn", // Chinese
};

type Language = {
  lng: string;
  setLng: (newLng: number) => void;
};

const useLanguage = create(
  persist<Language>(
    (set) => ({
      lng: typeof window !== 'undefined' 
        ? languageMap[parseInt(localStorage.getItem("language") || "1")]
        : languageMap[1], // Default to Indonesian if localStorage is not available
      setLng: (newLng: number) => {
        const languageCode = languageMap[newLng];
        if (languageCode) {
          console.log(`Setting language to: ${languageCode}`); // Debugging
          if (typeof window !== 'undefined') {
            localStorage.setItem("language", newLng.toString());
          }
          i18next.changeLanguage(languageCode);
          set({ lng: languageCode });
        } else {
          console.error(`Invalid language ID: ${newLng}`); // Debugging
        }
      },
    }),
    {
      name: "language",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLanguage;
