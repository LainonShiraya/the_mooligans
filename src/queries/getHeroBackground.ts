export const GET_HERO_BACKGROUND = `
  query GetHeroBackground {
    siteVisuals(first: 1) {
      heroBackground {
        url
      }
    }
  }
`;
