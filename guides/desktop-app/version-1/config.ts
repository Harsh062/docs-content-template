export default {
  settings: {
    name: "V1",
    slug: "v1",
    isDefault: true,
  },
  sidebar: [
    {
      type: "page",
      path: "./page-introduction.mdx",
      pages: [],
    },
    {
      type: "page",
      path: "./page-quick-start-guide.mdx",
      pages: [],
    },
    {
      type: "page",
      path: "./page-downloads.mdx",
      pages: [
        {
          type: "page",
          path: "./page-mac.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-linux.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-windows.mdx",
          pages: [],
        },
      ],
    },
    {
      type: "section",
      label: "Setup",
      slug: "setup",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./page-browsers.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-android.mdx",
          pages: [
            {
              type: "page",
              path: "./page-android-devices.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-android-emulators.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-ios.mdx",
          pages: [
            {
              type: "page",
              path: "./page-ios-devices.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-ios-emulators.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-node.js.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-terminal.mdx",
          pages: [],
        },
      ],
    },
    {
      type: "section",
      label: "Features",
      slug: "features",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./page-network-inspector.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-network-modification.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-others.mdx",
          pages: [
            {
              type: "page",
              path: "./page-import---export-network-sessions.mdx",
              pages: [],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Others",
      slug: "others",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./page-troubleshooting.mdx",
          pages: [
            {
              type: "page",
              path: "./page-system-wide-proxy-not-working-(macos).mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-troubleshooting:-untrusted-ssl-certificate.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-disable-system-wide-proxy-(macos).mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-troubleshooting-safari.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-intercepting-requests-from-localhost.mdx",
              pages: [],
            },
          ],
        },
      ],
    },
  ],
};
