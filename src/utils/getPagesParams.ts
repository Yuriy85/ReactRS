import data from '../data';

export default function getPagesParams(
  dataCount: number,
  limit: number = data.defaultLimitPages
): number[] {
  const pagesCount = Math.floor(dataCount / limit);
  let offset = 0;
  const offsets = [];

  for (let index = 0; index < pagesCount; index++) {
    if (index) {
      offset += limit;
      offsets.push(offset);
    } else {
      offsets.push(offset);
    }
  }

  return offsets;
}
