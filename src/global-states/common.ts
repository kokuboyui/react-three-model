import { useEffect } from 'react';
import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import UAParser from 'ua-parser-js';

import type { IBrowser, ICPU, IDevice, IEngine, IOS } from 'ua-parser-js';

export type TSystemSelector = {
  browser: IBrowser;
  cpu: ICPU;
  device: IDevice;
  engine: IEngine;
  os: IOS;
  isReady: boolean;
};

// atom ------------------------------------------
const browserAtom = atom<IBrowser>({
  key: 'browser',
  default: undefined,
});

const cpuAtom = atom<ICPU>({
  key: 'cpu',
  default: undefined,
});

const deviceAtom = atom<IDevice>({
  key: 'device',
  default: undefined,
});

const engineAtom = atom<IEngine>({
  key: 'engine',
  default: undefined,
});

const osAtom = atom<IOS>({
  key: 'os',
  default: undefined,
});

// selector ------------------------------------------
const uaSelector = selector<TSystemSelector>({
  key: 'uaSelector',
  get: ({ get }) => {
    const browser = get(browserAtom);
    const cpu = get(cpuAtom);
    const device = get(deviceAtom);
    const engine = get(engineAtom);
    const os = get(osAtom);

    const isReady =
      typeof browser !== 'undefined' &&
      typeof cpu !== 'undefined' &&
      typeof device !== 'undefined' &&
      typeof engine !== 'undefined' &&
      typeof os !== 'undefined';

    return { browser, cpu, device, engine, os, isReady };
  },
});

export type TUseGlobalCommon = {
  system: TSystemSelector;
};

export const useGlobalCommon = (): TUseGlobalCommon => {
  const uaParser: UAParser = new UAParser();

  // atom ------------------------------------------
  const setBrowser = useSetRecoilState(browserAtom);
  const setCpu = useSetRecoilState(cpuAtom);
  const setDevice = useSetRecoilState(deviceAtom);
  const setEngine = useSetRecoilState(engineAtom);
  const setOs = useSetRecoilState(osAtom);

  // selector ------------------------------------------
  const system = useRecoilValue(uaSelector);

  // useEffect ------------------------------------------
  useEffect(() => {
    setBrowser(uaParser.getBrowser());
    setCpu(uaParser.getCPU());
    setDevice(uaParser.getDevice());
    setEngine(uaParser.getEngine());
    setOs(uaParser.getOS());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    system,
  };
};
