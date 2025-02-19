


async function handleResult<T>(valueOrFn: Promise<T> | (() => T )) {
  try {
      const data = typeof valueOrFn === 'function'
          ? await valueOrFn()
          : await Promise.resolve(valueOrFn);
      return [data, null] as [T, null];
  } catch (error) {
    return [null, error instanceof Error ? error : new Error('Unknown error: ' + error)] as [null, Error];

  }
}
export default handleResult;