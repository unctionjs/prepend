# @unction/prepend

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> mixed -> (ArrayType | string) -> (ArrayType | string)

Takes a value and puts it at the beginning of the given list.


``` javascript
prepend(4)([5]) // => [4, 5]
prepend("c")("ab") // => "cab"
```

> NOTE: While there is a type annotation in the README, this function cannot have type annotations due to a bug in flow.

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/prepend.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/prepend.svg?maxAge=2592000&style=flat-square
