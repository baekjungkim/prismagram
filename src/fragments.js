export const USER_FRAGMENT = `
    id
    username
`;

export const COMMENT_FRAGMENT = `
  id
  text
  user{
    ${USER_FRAGMENT}
  }
`;

export const FILE_FRAGMENT = `
    id
    url
`;

export const LIKE_FRAGMENT = `
    id
    user {
      ${USER_FRAGMENT}
    }
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post {
    id
    caption
    location
    likes {
      ${LIKE_FRAGMENT}
    }
    files{
      ${FILE_FRAGMENT}
    }
    comments {
      ${COMMENT_FRAGMENT}
    }
    user {
      ${USER_FRAGMENT}
    }
  }
`;

export const CHAT_FRAGMENT = `
  fragment ChatParts on Chat {
    id
    participants {
      id
    }
  }
`;
