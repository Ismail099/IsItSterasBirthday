const isBrowser = () => typeof window !== 'undefined' && typeof window.document !== 'undefined';
const isNumber = v => typeof v === 'number';
const isString = v => typeof v === 'string';
const isSupported = () => isBrowser() && 'DeviceOrientationEvent' in window;

