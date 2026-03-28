export const SITE_NAME = 'Executive Funerals';
export const SITE_URL = 'https://executivefunerals.co.ke';
export const SHARE_IMAGE_URL = 'https://www.dropbox.com/scl/fi/eetq758qz7inxtsobrfza/lim.jpg?rlkey=fh0gl4gytvfnjheuwlc6sd0pv&st=j97qqtft&raw=1';
export const SHARE_IMAGE_ALT = 'Executive Funerals branded hearse and service fleet outside the company location.';
export const SHARE_IMAGE_WIDTH = '2048';
export const SHARE_IMAGE_HEIGHT = '1365';
export const DEFAULT_TITLE = 'Executive Funerals | Premium Funeral Services in Kenya';
export const DEFAULT_DESCRIPTION = 'Executive Funerals provides compassionate, well-coordinated, and premium funeral services for families across Kenya.';

export type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  card?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
};

export const resolveMetadata = (input: PageMetadataInput = {}) => {
  const path = input.path ?? '/';
  const url = input.url ?? new URL(path, `${SITE_URL}/`).toString();

  return {
    title: input.title ?? DEFAULT_TITLE,
    description: input.description ?? DEFAULT_DESCRIPTION,
    image: input.image ?? SHARE_IMAGE_URL,
    imageAlt: input.imageAlt ?? SHARE_IMAGE_ALT,
    type: input.type ?? 'website',
    url,
    card: input.card ?? 'summary_large_image',
    robots: input.noIndex ? 'noindex, nofollow' : 'index, follow',
  };
};

export const homePageMetadata = resolveMetadata();

export const checkoutPageMetadata = resolveMetadata({
  title: 'M-PESA Checkout | Executive Funerals',
  description: 'Confirm your Executive Funerals package with secure M-PESA checkout and direct support from the care team.',
  path: '/checkout/mpesa',
});

export const notFoundPageMetadata = resolveMetadata({
  title: 'Page Not Found | Executive Funerals',
  description: 'The page you requested could not be found. Return to Executive Funerals for funeral planning, packages, and family support.',
  path: '/',
  noIndex: true,
});
