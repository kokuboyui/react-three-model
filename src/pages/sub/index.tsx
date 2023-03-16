import { memo } from 'react';

import { Typography } from '../../components/ui';
import { Helmet } from '../../components/ui/base/helmet/helmet';
import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from '../../config';

import type { NextPage } from 'next';

const SubPage: NextPage = memo(() => (
  <>
    <Helmet
      siteName={SITE_TITLE}
      title={`SUB | ${SITE_TITLE}`}
      description={SITE_DESCRIPTION}
      ogType="article"
      ogUrl={SITE_URL}
      ogImage={OG_IMAGE_URL}
    />
    <Typography
      Tag="h1"
      settings={{
        xs: {
          size: 16,
        },
      }}
    >
      SUB PAGE
    </Typography>
  </>
));

SubPage.displayName = 'SubPage';

export default SubPage;
