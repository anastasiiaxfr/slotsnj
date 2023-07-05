import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "fea8efc3-724e-4288-95c5-50dda7edfaf6", // Get this from tina.io
  token: "54ca3c91485c46597e8ce91cc51834eeef6d9d35", // Get this from tina.io

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
