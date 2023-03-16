import type { FC } from 'react';

export type THelmetProps = {
  siteName: string;
  title: string;
  description: string;
  ogType: 'website' | 'article' | 'blog';
  ogUrl: string;
  ogImage: string;
  keywords?: string;
  twitterSite?: string;
  twitterCard?: string;
  isNoIndex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
};

const Meta: FC<THelmetProps> = (props: THelmetProps) => {
  const {
    siteName,
    title,
    description,
    ogType,
    ogUrl,
    ogImage,
    twitterSite,
    twitterCard,
    isNoIndex,
    keywords,
    ogTitle,
    ogDescription,
  }: THelmetProps = props;

  return (
    <>
      {isNoIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta name="description" content={description} key="description" />
      {keywords && <meta name="keywords" content={keywords} key="keywords" />}
      <meta property="og:locale" content="ja_JP" key="ogLocal" />
      <meta property="og:type" content={ogType} key="ogType" />
      <meta property="og:site_name" content={siteName} key="ogSiteName" />
      <meta property="og:title" content={ogTitle || title} key="ogTitle" />
      <meta
        property="og:description"
        content={ogDescription || description}
        key="ogDescription"
      />
      <meta property="og:image" content={ogImage} key="ogImage" />
      <meta property="og:url" content={ogUrl} key="ogUrl" />
      <meta
        name="twitter:card"
        content={twitterCard || 'summary_large_image'}
        key="twitterCard"
      />
      <meta
        name="twitter:title"
        content={ogTitle || title}
        key="twitterTitle"
      />
      {twitterSite && (
        <meta name="twitter:site" content={twitterSite} key="twitterSite" />
      )}
      <meta
        name="twitter:description"
        content={ogDescription || description}
        key="twitterDescription"
      />
      <meta name="twitter:image:src" content={ogImage} key="twitterImage" />
    </>
  );
};

export { Meta };
