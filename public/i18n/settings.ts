export const fallbackLng = "id"; // Set Indonesian as the default language
export const languages = [fallbackLng, "en", "cn"]; // Ensure all supported languages are listed
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

export function getContentByLng(
  lng: ListLangType,
  contentEn: string,
  contentId: string,
  contentCn: string
) {
  return lng === "en"
    ? contentEn
    : lng === "id"
    ? contentId
    : lng === "cn"
    ? contentCn
    : null;
}

export function getPathname(lng: ListLangType, pathname?: string) {
  return pathname ? `/${lng}/${pathname}` : `/${lng}`;
}

export type ListLangType = "en" | "id" | "cn";

export interface ParamsI18n {
  t?: any;
  lng?: ListLangType;
}