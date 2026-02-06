export interface ZodiacName {
    fr: string;
    en: string;
}

export interface ZodiacSign {
    char: string;
    name: ZodiacName;
}

export const zodiacSigns: ZodiacSign[] = [
    { char: "♒", name: { fr: "Verseau", en: "Aquarius" } },
    { char: "♓", name: { fr: "Poissons", en: "Pisces" } },
    { char: "♈", name: { fr: "Bélier", en: "Aries" } },
    { char: "♉", name: { fr: "Taureau", en: "Taurus" } },
    { char: "♊", name: { fr: "Gémeaux", en: "Gemini" } },
    { char: "♋", name: { fr: "Cancer", en: "Cancer" } },
    { char: "♌", name: { fr: "Lion", en: "Leo" } },
    { char: "♍", name: { fr: "Vierge", en: "Virgo" } },
    { char: "♎", name: { fr: "Balance", en: "Libra" } },
    { char: "♏", name: { fr: "Scorpion", en: "Scorpio" } },
    { char: "♐", name: { fr: "Sagittaire", en: "Sagittarius" } },
    { char: "♑", name: { fr: "Capricorne", en: "Capricorn" } }
];