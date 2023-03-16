import { useEffect } from 'react';
import { useRecoilSnapshot } from 'recoil';

import type { FC } from 'react';

const DebugObserver: FC = () => {
  // hooks ------------------------------------------
  const snapshot = useRecoilSnapshot();

  // useEffect ------------------------------------------
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.debug('The following atoms were modified:');
    // eslint-disable-next-line no-restricted-syntax
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      // eslint-disable-next-line no-console
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
};

export { DebugObserver };
