export enum Locale {
    RU = "RU",
    EN = "EN",
    AR = "AR",
    CH = "CH",
    KO = "KO",
}

export type ERLocale = Locale.EN | Locale.RU;

export type ERLocaleText = {
    [key in ERLocale]?: string;
}

export type LocaleText = {
    [key in Locale]: string;
}