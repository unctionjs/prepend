/* eslint-disable no-extra-parens, no-unused-expressions */
import type from "@unction/type";
export default function prepend (value) {
  return function prependLeft (orderedList) {
    switch (type(orderedList)) {
      case "String":
      {
        return `${value}${orderedList}`;
      }

      case "Array":
      {
        return [value, ...orderedList];
      }

      default:
      {
        throw new Error(`prepend doesn't know how to deal with ${type(orderedList)}`);
      }
    }
  };
}
