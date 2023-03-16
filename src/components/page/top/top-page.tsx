import { memo } from 'react';

import { Top } from './top';
import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from '../../../config';
import { Helmet } from '../../ui';

import type { NextPage } from 'next';

const TopPage: NextPage = memo(() => (
  <>
    <Helmet
      siteName={SITE_TITLE}
      title={SITE_TITLE}
      description={SITE_DESCRIPTION}
      ogType="website"
      ogUrl={SITE_URL}
      ogImage={OG_IMAGE_URL}
    />
    <Top />
  </>
));

TopPage.displayName = 'TopPage';

export { TopPage };
