// Hardcoded images for live deployment
// Real hosted image links provided for each dish and cocktail
export interface HardcodedImageRegistry {
  food: Record<string, string>;
  cocktails: Record<string, string>;
}

export const HARDCODED_IMAGES: HardcodedImageRegistry = {
  food: {
    "food-bang": "https://i.imgur.com/R6isbeO.jpeg",
    "food-tat": "https://i.imgur.com/FeZiKDZ.jpeg",
    "food-nep": "https://i.imgur.com/qbq2BIb.png",
    "food-dac": "https://i.imgur.com/RJu0WjD.jpeg",
    "food-beo": "https://i.imgur.com/hZ39VHU.jpeg",
    "food-mang": "https://i.imgur.com/oIbH8qV.jpeg",
    "food-tiu": "https://i.imgur.com/Tsa7qnS.jpeg",
    "food-tam": "https://i.imgur.com/oROoMs0.jpeg",
    "food-to": "https://i.imgur.com/QbTVQwp.jpeg",
    "food-bo": "https://i.imgur.com/IO2U2B9.jpeg",
    "food-bap": "https://i.imgur.com/eCSixCJ.jpeg",
    "food-mam": "https://i.imgur.com/nqPAQNa.jpeg",
    "food-dua": "https://i.imgur.com/H6EwY0a.jpeg",
    "food-potato-mille-feuille": "https://i.imgur.com/SO6qzZB.jpeg"
  },
  cocktails: {
    "cocktail-pho": "https://i.imgur.com/thJkIEV.jpeg",
    "cocktail-com": "https://i.imgur.com/lB4dMl7.jpeg",
    "cocktail-cafe-trung": "https://i.imgur.com/E9mES2v.jpeg",
    "cocktail-o-mai": "https://i.imgur.com/OLh8nJX.jpeg",
    "cocktail-cao-lau": "https://i.imgur.com/qCTVDXN.jpeg",
    "cocktail-banh-xoai": "https://i.imgur.com/5TWmrZ1.jpeg",
    "cocktail-bia-muc": "https://i.imgur.com/tVWAwb0.jpeg",
    "cocktail-canh-chua": "https://i.imgur.com/G3s4MZo.jpeg",
    "cocktail-da-me": "https://i.imgur.com/KcI0Xzf.jpeg",
    "cocktail-xoi-bap": "https://i.imgur.com/SOypJCj.jpeg",
    "cocktail-coc": "https://i.imgur.com/VfM2qhU.jpeg",
    "cocktail-kho-qua": "https://i.imgur.com/qhtlQjc.jpeg"
  }
};
