/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import prepend from "./"

test(({same, end}) => {
  same(
    prepend("a")(["b"]),
    ["a", "b"]
  )

  end()
})

test(({same, end}) => {
  same(
    prepend("a")("bc"),
    "abc"
  )

  end()
})

test(({throws, end}) => {
  throws(() => prepend("c")({}))

  end()
})
