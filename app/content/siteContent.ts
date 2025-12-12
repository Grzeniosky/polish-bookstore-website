export const site = {
  phone: "607688410",
  phoneDisplay: "+48 607 688 410",
  email: "agatazd70@gmail.com",
  facebookUrl: "https://www.facebook.com/KsiegarniaRegionalna",
  addressLines: ["ul. Pijarska 38", "05-530 Góra Kalwaria"],
  mapQuery: "Pijarska 38, 05-530 Góra Kalwaria (Plus code: X6M8+XJ Góra Kalwaria)",
  hours: {
    weekdayLong: "Pon-Pt: 10:00-18:00",
    saturdayLong: "Sob: 10:00-13:30",
    weekdayShort: "Pon-Pt: 10-18",
    saturdayShort: "Sob: 10-13:30",
  },
  ownerLine: "– Agata Zduńczyk, właścicielka",
  openingHours: {
    override: {
      // "2025-12-24": "Dziś nieczynne (Wigilia)",
    } as Record<string, string>,
    weekday: { open: "10:00", close: "18:00" },
    saturday: { open: "10:00", close: "13:30" },
    sunday: null,
  },
}