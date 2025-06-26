import { BunchesUpdated } from '../../../company/types';
import { PartialViewItemUpdate } from '../../handlers-view/update';



/**
 * Выбирает все уникальные bunchId, создаёт BunchesUpdated, добавляя bunchUpdatedMs */
export const getBunchesTimestamps = (items: PartialViewItemUpdate[], bunchUpdatedMs: number): BunchesUpdated => {
  const bunchMap: BunchesUpdated = {};

  items.forEach(item => {
    const { bunchId } = item;
    if (! bunchMap[bunchId]) {
      bunchMap[bunchId] = bunchUpdatedMs;
    }
  });

  return bunchMap
}
