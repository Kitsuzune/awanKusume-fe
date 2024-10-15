import { useEffect, useState } from "react";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import Backend from "i18next-chained-backend";
import HttpApi from "i18next-http-backend";
import { getOptions, languages, cookieName } from "./settings";
import { APP_LANGUAGE_TYPE } from "@/const/config";
import Locize from "i18next-locize-backend";

const runsOnServerSide = typeof window === "undefined";

(i18next as any)
  .use(initReactI18next)
  .use(
    APP_LANGUAGE_TYPE === "frontend"
      ? resourcesToBackend(
          (language: string, namespace: string) =>
            import(`./locales/${language}/${namespace}.json`)
        )
      : Backend
  )
  .init({
    ...getOptions(),
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
    backend:
      APP_LANGUAGE_TYPE === "backend"
        ? {
            backends: [Locize, HttpApi],
            backendOptions: [
              {
                expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
              },
              {
                loadPath: `${process.env.REACT_APP_BASE_URL}/locales/{{lng}}/{{ns}}`,
              },
            ],
            cacheHitMode: "refreshAndUpdateStore",
          }
        : undefined,
  });

export function useTranslationCustom(lng: string, ns: string, options?: any) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //   if (cookies.i18next === lng) return;
    //   setCookie(cookieName, lng, { path: "/" });
    // }, [lng, cookies.i18next]);
  }
  return ret;
}
