import type from "@unction/type";

export default function prepend<A, B> (value: A) {
  return function prependLeft (orderedList: Array<A | B> | string): Array<A | B> | string {
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
