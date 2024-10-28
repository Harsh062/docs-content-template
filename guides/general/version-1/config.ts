export default {
  settings: {
    name: "V1",
    slug: "v1",
    isDefault: true,
  },
  sidebar: [
    {
      type: "section",
      label: "Getting Started",
      slug: "getting-started",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./page-introduction.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-quick-start-guide.mdx",
          pages: [
            {
              type: "page",
              path: "./page-create-first-rule.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-create-new-mock-api.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-record-a-session.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-make-an-api-request.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-downloads.mdx",
          pages: [
            {
              type: "page",
              path: "./page-chrome.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-firefox.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-edge.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-security-&-privacy.mdx",
          pages: [],
        },
      ],
    },
    {
      type: "section",
      label: "HTTP Rules",
      slug: "http-rules",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./page-overview.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-rule-types.mdx",
          pages: [
            {
              type: "page",
              path: "./page-redirect-request.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-replace-string.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-modify-headers.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-modify-request-body.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-modify-query-params.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-modify-user-agents.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-delay-request.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-modify-response-body.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-modify-dom-inject-scripts.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-cancel-rule.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-organizing-rules.mdx",
          pages: [
            {
              type: "page",
              path: "./page-grouping.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-pinning-rules.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-advanced-usage.mdx",
          pages: [
            {
              type: "page",
              path: "./page-graphql---modify-request-&-response.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-map-local.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-map-remote.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-rule-operators.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-advance-targeting.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-shared-state.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-others.mdx",
          pages: [
            {
              type: "page",
              path: "./page-testing.mdx",
              pages: [
                {
                  type: "page",
                  path: "./page-test-url-condition.mdx",
                },
                {
                  type: "page",
                  path: "./page-test-this-rule.mdx",
                },
              ],
            },
            {
              type: "page",
              path: "./page-charles-proxy-importer.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-pause-resume-requestly.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-import-export-rules-from-file.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-sharing-rules.mdx",
              pages: [],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Session Book",
      slug: "session-book",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./page-overview.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-configure.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-record-session.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-save-session.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-share-session.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-view-session.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-architecture.mdx",
          pages: [],
        },
      ],
    },
    {
      type: "section",
      label: "Mock/File Server",
      slug: "mock-server",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./page-overview.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-create.mdx",
          pages: [
            {
              type: "page",
              path: "./page-create-mock-api.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-create-file-mock.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-mock-collection.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-test-mock-api.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-pre-configured-mocks.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-templating-in-mocks.mdx",
          pages: [],
        },
      ],
    },
    {
      type: "section",
      label: "API Client",
      slug: "api-client",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./page-overview.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-make-an-api-request.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-replay-request-from-history.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-import-from-curl.mdx",
          pages: [],
        },
      ],
    },
    {
      type: "section",
      label: "Public API",
      slug: "public-api",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./page-introduction-to-the-public-api.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./page-endpoints.mdx",
          pages: [
            {
              type: "page",
              path: "./page-rules-api.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-groups-api.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-schema.mdx",
          pages: [
            {
              type: "page",
              path: "./page-rules.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-groups.mdx",
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
          path: "./page-workspaces.mdx",
          pages: [
            {
              type: "page",
              path: "./page-how-to-get-started-with-shared-workspace.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-user-roles.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./page-managing-workspace.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-billing-&-subscriptions.mdx",
          pages: [
            {
              type: "page",
              path: "./page-billing-team.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./page-blocklist.mdx",
          pages: [],
        },
      ],
    },
    {
      type: "section",
      label: "Troubleshooting",
      slug: "troubleshooting",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./page-rules-not-working.mdx",
          pages: [],
        },
      ],
    },
  ],
};
