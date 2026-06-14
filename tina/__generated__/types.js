export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomePagePartsFragmentDoc = gql`
    fragment HomePageParts on HomePage {
  __typename
  hero_label
  hero_heading
  hero_bio
  status_label
  status_sub
  location
  location_sub
  latest_project
  latest_project_sub
  stat_years
  stat_skills_detail
  stat_commits
  stat_site_version
}
    `;
export const AboutPagePartsFragmentDoc = gql`
    fragment AboutPageParts on AboutPage {
  __typename
  profile_image
  heading
  bio_1
  bio_2
  core_skills
  tool_skills
  status_label
  status_sub
  location
  location_sub
  social_links {
    __typename
    label
    url
  }
}
    `;
export const ContactPagePartsFragmentDoc = gql`
    fragment ContactPageParts on ContactPage {
  __typename
  heading
  email
  formspree_id
  status_label
  status_sub
  social_links {
    __typename
    label
    url
  }
}
    `;
export const SiteSettingsPartsFragmentDoc = gql`
    fragment SiteSettingsParts on SiteSettings {
  __typename
  cta_heading
  cta_sub
  cta_email
}
    `;
export const ProjectPartsFragmentDoc = gql`
    fragment ProjectParts on Project {
  __typename
  title
  description
  tech
  status
  github_url
  live_url
  thumbnail
  order
  featured
  body
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  date
  excerpt
  tags
  cover_image
  body
}
    `;
export const HomePageDocument = gql`
    query homePage($relativePath: String!) {
  homePage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomePageParts
  }
}
    ${HomePagePartsFragmentDoc}`;
export const HomePageConnectionDocument = gql`
    query homePageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomePageFilter) {
  homePageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomePageParts
      }
    }
  }
}
    ${HomePagePartsFragmentDoc}`;
export const AboutPageDocument = gql`
    query aboutPage($relativePath: String!) {
  aboutPage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AboutPageParts
  }
}
    ${AboutPagePartsFragmentDoc}`;
export const AboutPageConnectionDocument = gql`
    query aboutPageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AboutPageFilter) {
  aboutPageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AboutPageParts
      }
    }
  }
}
    ${AboutPagePartsFragmentDoc}`;
export const ContactPageDocument = gql`
    query contactPage($relativePath: String!) {
  contactPage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactPageParts
  }
}
    ${ContactPagePartsFragmentDoc}`;
export const ContactPageConnectionDocument = gql`
    query contactPageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactPageFilter) {
  contactPageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactPageParts
      }
    }
  }
}
    ${ContactPagePartsFragmentDoc}`;
export const SiteSettingsDocument = gql`
    query siteSettings($relativePath: String!) {
  siteSettings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SiteSettingsParts
  }
}
    ${SiteSettingsPartsFragmentDoc}`;
export const SiteSettingsConnectionDocument = gql`
    query siteSettingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SiteSettingsFilter) {
  siteSettingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SiteSettingsParts
      }
    }
  }
}
    ${SiteSettingsPartsFragmentDoc}`;
export const ProjectDocument = gql`
    query project($relativePath: String!) {
  project(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProjectParts
  }
}
    ${ProjectPartsFragmentDoc}`;
export const ProjectConnectionDocument = gql`
    query projectConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProjectFilter) {
  projectConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProjectParts
      }
    }
  }
}
    ${ProjectPartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    homePage(variables, options) {
      return requester(HomePageDocument, variables, options);
    },
    homePageConnection(variables, options) {
      return requester(HomePageConnectionDocument, variables, options);
    },
    aboutPage(variables, options) {
      return requester(AboutPageDocument, variables, options);
    },
    aboutPageConnection(variables, options) {
      return requester(AboutPageConnectionDocument, variables, options);
    },
    contactPage(variables, options) {
      return requester(ContactPageDocument, variables, options);
    },
    contactPageConnection(variables, options) {
      return requester(ContactPageConnectionDocument, variables, options);
    },
    siteSettings(variables, options) {
      return requester(SiteSettingsDocument, variables, options);
    },
    siteSettingsConnection(variables, options) {
      return requester(SiteSettingsConnectionDocument, variables, options);
    },
    project(variables, options) {
      return requester(ProjectDocument, variables, options);
    },
    projectConnection(variables, options) {
      return requester(ProjectConnectionDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/108ffc85-6653-4423-a46e-eaa9c2063fcc/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
