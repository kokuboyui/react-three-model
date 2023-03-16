import { memo } from 'react';

import type { SVGProps, FC } from 'react';

export const FacebookIcon: FC<SVGProps<SVGSVGElement>> = memo((props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M23 12.065C23 5.95 18.078 1 12 1 5.923 1 1 5.951 1 12.065c0 5.523 4.024 10.096 9.277 10.926v-7.736H7.49v-3.19h2.796V9.63c0-2.775 1.64-4.306 4.152-4.306 1.201 0 2.466.212 2.466.212v2.72H15.52c-1.366 0-1.797.858-1.797 1.725v2.084h3.053l-.486 3.199h-2.567V23C18.976 22.16 23 17.588 23 12.065Z" />
  </svg>
));
FacebookIcon.displayName = 'FacebookIcon';
