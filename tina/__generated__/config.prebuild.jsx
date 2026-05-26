// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "src/content/projects",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: { component: "textarea" }
          },
          { type: "string", name: "tech", label: "Tech Stack", list: true },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: [
              { label: "Active", value: "active" },
              { label: "Archived", value: "archived" }
            ]
          },
          { type: "string", name: "github_url", label: "GitHub URL" },
          { type: "string", name: "live_url", label: "Live URL" },
          { type: "image", name: "thumbnail", label: "Thumbnail" },
          { type: "number", name: "order", label: "Sort Order" },
          { type: "boolean", name: "featured", label: "Featured" },
          { type: "rich-text", name: "body", label: "Content", isBody: true }
        ]
      },
      {
        name: "post",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "datetime", name: "date", label: "Publish Date", required: true },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
            ui: { component: "textarea" }
          },
          { type: "string", name: "tags", label: "Tags", list: true },
          { type: "image", name: "cover_image", label: "Cover Image" },
          { type: "rich-text", name: "body", label: "Content", isBody: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
