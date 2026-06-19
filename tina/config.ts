import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'homePage',
        label: 'Home Page',
        path: 'src/content/pages',
        match: { include: 'home' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'hero_label', label: 'Hero Label' },
          { type: 'string', name: 'hero_heading', label: 'Hero Heading', ui: { component: 'textarea' } },
          { type: 'string', name: 'hero_bio', label: 'Hero Bio', ui: { component: 'textarea' } },
          { type: 'string', name: 'status_label', label: 'Status Label' },
          { type: 'string', name: 'status_sub', label: 'Status Sub-text' },
          { type: 'string', name: 'location', label: 'Location' },
          { type: 'string', name: 'location_sub', label: 'Location Sub-text' },
          { type: 'string', name: 'latest_project', label: 'Latest Project' },
          { type: 'string', name: 'latest_project_sub', label: 'Latest Project Sub-text' },
          { type: 'string', name: 'stat_years', label: 'Years Experience (stat)' },
          { type: 'string', name: 'stat_skills_detail', label: 'Skills Detail', ui: { component: 'textarea' } },
          { type: 'string', name: 'stat_commits', label: 'Commits This Month (stat)' },
          { type: 'string', name: 'stat_site_version', label: 'Site Version (stat)' },
        ],
      },
      {
        name: 'aboutPage',
        label: 'About Page',
        path: 'src/content/pages',
        match: { include: 'about' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'image', name: 'profile_image', label: 'Profile Image' },
          { type: 'string', name: 'heading', label: 'Heading', ui: { component: 'textarea' } },
          { type: 'string', name: 'bio_1', label: 'Bio Paragraph 1', ui: { component: 'textarea' } },
          { type: 'string', name: 'bio_2', label: 'Bio Paragraph 2', ui: { component: 'textarea' } },
          { type: 'string', name: 'core_skills', label: 'Core Skills', list: true },
          { type: 'string', name: 'tool_skills', label: 'Tools & Platforms', list: true },
          { type: 'string', name: 'status_label', label: 'Status Label' },
          { type: 'string', name: 'status_sub', label: 'Status Sub-text' },
          { type: 'string', name: 'location', label: 'Location' },
          { type: 'string', name: 'location_sub', label: 'Location Sub-text' },
          {
            type: 'object',
            name: 'social_links',
            label: 'Social Links',
            list: true,
            fields: [
              { type: 'string', name: 'label', label: 'Label' },
              { type: 'string', name: 'url', label: 'URL' },
            ],
          },
        ],
      },
      {
        name: 'contactPage',
        label: 'Contact Page',
        path: 'src/content/pages',
        match: { include: 'contact' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'heading', label: 'Heading', ui: { component: 'textarea' } },
          { type: 'string', name: 'email', label: 'Email Address' },
          { type: 'string', name: 'formspree_id', label: 'Formspree Form ID' },
          { type: 'string', name: 'status_label', label: 'Status Label' },
          { type: 'string', name: 'status_sub', label: 'Status Sub-text' },
          {
            type: 'object',
            name: 'social_links',
            label: 'Social Links',
            list: true,
            fields: [
              { type: 'string', name: 'label', label: 'Label' },
              { type: 'string', name: 'url', label: 'URL' },
            ],
          },
        ],
      },
      {
        name: 'siteSettings',
        label: 'Site Settings',
        path: 'src/content/pages',
        match: { include: 'site' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'cta_heading', label: 'CTA Heading', ui: { component: 'textarea' } },
          { type: 'string', name: 'cta_sub', label: 'CTA Sub-text', ui: { component: 'textarea' } },
          { type: 'string', name: 'cta_email', label: 'CTA Email' },
        ],
      },
      {
        name: 'project',
        label: 'Projects',
        path: 'src/content/projects',
        format: 'mdx',
        ui: {
          filename: {
            slugify: (values) =>
              (values?.title ?? '')
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, ''),
          },
        },
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
            ui: { component: 'textarea' },
          },
          { type: 'boolean', name: 'draft', label: 'Draft' },
          { type: 'string', name: 'tech', label: 'Tech Stack', list: true },
          {
            type: 'string',
            name: 'status',
            label: 'Status',
            options: [
              { label: 'Active', value: 'active' },
              { label: 'Archived', value: 'archived' },
            ],
          },
          { type: 'string', name: 'github_url', label: 'GitHub URL' },
          { type: 'string', name: 'live_url', label: 'Live URL' },
          { type: 'image', name: 'thumbnail', label: 'Thumbnail' },
          { type: 'number', name: 'order', label: 'Sort Order' },
          { type: 'boolean', name: 'featured', label: 'Featured' },
          { type: 'string', name: 'blueskyUrl', label: 'Bluesky URL' },
          { type: 'string', name: 'mastodonUrl', label: 'Mastodon URL' },
          { type: 'rich-text', name: 'body', label: 'Content', isBody: true },
        ],
      },
      {
        name: 'post',
        label: 'Blog Posts',
        path: 'src/content/blog',
        format: 'mdx',
        ui: {
          filename: {
            slugify: (values) =>
              (values?.title ?? '')
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, ''),
          },
        },
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'datetime', name: 'date', label: 'Publish Date', required: true },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            required: true,
            ui: { component: 'textarea' },
          },
          { type: 'boolean', name: 'draft', label: 'Draft' },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'image', name: 'cover_image', label: 'Cover Image' },
          { type: 'string', name: 'blueskyUrl', label: 'Bluesky URL' },
          { type: 'string', name: 'mastodonUrl', label: 'Mastodon URL' },
          { type: 'rich-text', name: 'body', label: 'Content', isBody: true },
        ],
      },
    ],
  },
});
