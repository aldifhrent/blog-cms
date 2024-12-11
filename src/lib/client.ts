import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "az7rnrqyxlof",
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    "Kt-7TJrrRmkE3gP6skKkdansrWnf9TRGNX58LOU3fPA",
});
