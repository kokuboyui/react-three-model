// types ------------------------------------------
export type TTwitterLink = {
  text: string;
  url: string;
  hashTag: string;
};

export type TLineLink = {
  text: string;
  url: string;
};

// functions ------------------------------------------
/**
 * Facebookのリンクを取得
 * @param url
 */
export const getFacebookLink = (url: string): string =>
  `https://www.facebook.com/sharer.php?u=${encodeURIComponent(`${url}`)}`;

/**
 * Twitterのリンクを取得
 * @param props
 */
export const getTwitterLink = (props: TTwitterLink): string => {
  const { text, url, hashTag }: TTwitterLink = props;

  return `https://twitter.com/share?text=${encodeURIComponent(
    `${text}`
  )}&url=${url}&hashtags=${hashTag}`;
};

/**
 * Lineのリンクを取得
 * @param props
 */
export const getLineLink = (props: TLineLink): string => {
  const { text, url }: TLineLink = props;

  return `https://line.me/R/msg/text/?${encodeURIComponent(`${text} ${url}`)}`;
};
