import { DEBOUNCE_DELAY } from '@/models';

export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number = DEBOUNCE_DELAY,
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let lastInvokeTimestamp = 0;

  return (...args: Parameters<T>): void => {
    clearTimeout(timeoutId);

    const currentTimestamp = Date.now();
    const elapsedSinceLastInvoke = currentTimestamp - lastInvokeTimestamp;

    timeoutId = setTimeout(
      () => {
        lastInvokeTimestamp = Date.now();
        fn(...args);
      },
      Math.max(0, delay - elapsedSinceLastInvoke),
    );
  };
};
