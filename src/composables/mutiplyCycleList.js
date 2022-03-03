import { useCycleList } from '@vueuse/core';
import _ from 'lodash';

function mergeList(list) {
  return list.reduce((acc, cur) => {
    cur.forEach((item, index) => {
      acc[index] = _.merge(acc[index] || {}, item);
    });
    return acc;
  }, []);
}

// eslint-disable-next-line import/prefer-default-export
export function useMultiplyCycleList(options) {
  const cycleListArr = Object.entries(options)
    .map(([key, value]) => value.map((v) => ({ [key]: v })));
  const cycleList = mergeList(cycleListArr);
  return useCycleList(cycleList);
}
