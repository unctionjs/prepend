import type from "@unction/type";
import {OrderedEnumerableType} from "./types";

export default function prepend<A, B> (value: A) {
  return function prependLeft (orderedList: OrderedEnumerableType<A | B>): OrderedEnumerableType<A | B> {
    switch (type(orderedList)) {
      case "String": {
        return `${value}${orderedList}`;
      }

      case "Array": {
        return [value, ...orderedList];
      }

      default: {
        throw new Error(`prepend doesn't know how to deal with ${type(orderedList)}`);
      }
    }
  };
}
