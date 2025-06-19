import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import { STORAGE_KEYS } from "../utils/storageKeys";

// Ensure splash screen stays visible until manually hidden
SplashScreen.preventAutoHideAsync();

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    let isMounted = true;

    async function loadResourcesAndDataAsync() {
      try {
        // Detect device language
        const locales = Localization.getLocales();
        const localLang =
          locales?.length && locales[0].languageCode === "en" ? "en" : "ar";

        // Read or set language in AsyncStorage
        const langStorage = await AsyncStorage.getItem(STORAGE_KEYS.LANG);
        const selectedLang = langStorage || localLang;
        await AsyncStorage.setItem(STORAGE_KEYS.LANG, selectedLang);
        if (isMounted) setLanguage(selectedLang);

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch (e) {
        console.warn("Error loading resources", e);
      } finally {
        if (isMounted) {
          setLoadingComplete(true);
          await SplashScreen.hideAsync();
        }
      }
    }

    loadResourcesAndDataAsync();

    return () => {
      isMounted = false;
    };
  }, []);

  return { isLoadingComplete, language };
}
