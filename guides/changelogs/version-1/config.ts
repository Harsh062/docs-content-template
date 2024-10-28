// This is the config for the a version
// We currently only support a single version
// isDefault has to be set to true for the version which will be deployed. Meaning, there can be multiple version folders, but only one can be deployed
export default {
  // These settings are ignored on DB level for now 
  settings: {
    name: "V1",
    slug: "v1",
    isDefault: true,
  },
  // Sidebar configuration goes here
  // It is an array of pages, sections or links
  // Each page/section can have multiple pages
  // This is used to create a sidebar and link the content of a page to its corresponding sidebar item
  sidebar: [
    {
      // Page can only have two attributes: type and path
      type: "page",
      // Relative to the version folder
      path: "./page-extension.mdx",
      pages: [
        {
          type: "page",
          path: "./page-v24.7.23---blocklist-support.mdx",
          pages: [],
        },
      ],
    },
    {
      type: "page",
      path: "./page-desktop-app.mdx",
      pages: [],
    },
  ],
};
