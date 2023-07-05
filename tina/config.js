import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "54c244d3-b42a-42c5-bf35-675fc1fd9e6c", // Get this from tina.io
  token: "dcdfc9a5f9c100f13bc0ab39c582f90a92989475", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "betting",
        label: "Betting",
        path: "content/english/betting",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: "Author",
            name: "author",
            type: "reference",
            collections: ["authors"]
          },
          {
            type: "datetime",
            name: "date",
            label: "DateTime",
            ui: {
              timeFormat: "hh:mm A"
            },
          },
          {
            type: 'image',
            label: 'Thumbnail',
            name: 'imgSrc',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "news",
        label: "News",
        path: "content/english/news",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: 'image',
            label: 'Thumbnail',
            name: 'imgSrc',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "authors",
        label: "Authors",
        path: "content/english/author",
        fields: [{
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          }]
      }

    ],
  },
});