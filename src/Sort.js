import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      snapshot(nums);
      const tempNum = nums[i];
      if (nums[i] > nums[i + 1]) {
        nums[i] = nums[i + 1];
        nums[i + 1] = tempNum;
        swapped = true;
      }
    }
  }
  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
