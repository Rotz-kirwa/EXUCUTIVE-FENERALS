import { useEffect } from 'react';

import { PageMetadataInput, SITE_NAME, SHARE_IMAGE_HEIGHT, SHARE_IMAGE_WIDTH, resolveMetadata } from '@/lib/siteMetadata';

type MetaDescriptor = {
  attr: 'name' | 'property';
  key: string;
  content: string;
};

const upsertMetaTag = ({ attr, key, content }: MetaDescriptor) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const upsertCanonicalLink = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
};

const PageMetadata = ({ metadata }: { metadata?: PageMetadataInput }) => {
  const resolved = resolveMetadata(metadata);

  useEffect(() => {
    document.title = resolved.title;
    upsertCanonicalLink(resolved.url);

    const tags: MetaDescriptor[] = [
      { attr: 'name', key: 'description', content: resolved.description },
      { attr: 'name', key: 'robots', content: resolved.robots },
      { attr: 'property', key: 'og:title', content: resolved.title },
      { attr: 'property', key: 'og:description', content: resolved.description },
      { attr: 'property', key: 'og:image', content: resolved.image },
      { attr: 'property', key: 'og:image:secure_url', content: resolved.image },
      { attr: 'property', key: 'og:image:type', content: 'image/jpeg' },
      { attr: 'property', key: 'og:image:width', content: SHARE_IMAGE_WIDTH },
      { attr: 'property', key: 'og:image:height', content: SHARE_IMAGE_HEIGHT },
      { attr: 'property', key: 'og:image:alt', content: resolved.imageAlt },
      { attr: 'property', key: 'og:url', content: resolved.url },
      { attr: 'property', key: 'og:type', content: resolved.type },
      { attr: 'property', key: 'og:site_name', content: SITE_NAME },
      { attr: 'name', key: 'twitter:card', content: resolved.card },
      { attr: 'name', key: 'twitter:title', content: resolved.title },
      { attr: 'name', key: 'twitter:description', content: resolved.description },
      { attr: 'name', key: 'twitter:image', content: resolved.image },
      { attr: 'name', key: 'twitter:image:alt', content: resolved.imageAlt },
    ];

    tags.forEach(upsertMetaTag);
  }, [
    resolved.card,
    resolved.description,
    resolved.image,
    resolved.imageAlt,
    resolved.robots,
    resolved.title,
    resolved.type,
    resolved.url,
  ]);

  return null;
};

export default PageMetadata;
