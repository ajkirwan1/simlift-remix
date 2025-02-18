/** @format */

import { createClient, Entry, EntrySkeletonType } from "contentful";

interface ErrorResponse {
  error: {
    message: string;
  };
}

interface LiftEntryFields extends EntrySkeletonType {
  contentTypeId: "liftEntry";
  fields: {
    title: string;
    description: string;
    image: string;
  };
}
type LiftEntry = Entry<LiftEntryFields> & EntrySkeletonType;

export async function getAllLifts(): Promise<
  Entry<LiftEntry>[] | ErrorResponse
> {
  try {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    if (!spaceId || !accessToken) {
      throw new Error("Missing Contentful space ID or access token");
    }

    const client = createClient({
      space: spaceId,
      accessToken: accessToken,
    });

    const entries = await client.getEntries<LiftEntry>({
      content_type: "simliftProduct",
    });

    return entries.items;
  } catch (error) {
    return {
      error: {
        message:
          error instanceof Error
            ? error.message
            : "An error occurred fetching the data",
      },
    };
  }
}
