import { createClient } from "contentful";

export function createLoader(locale = "en-US") {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  return {
    getAboutPage: async () => {
      const entries = await client.getEntries({
        content_type: "aboutPage",
        locale,
      });
      return entries.items[0]?.fields;
    },
  };
}
