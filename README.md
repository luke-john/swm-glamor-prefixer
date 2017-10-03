# swm-glamor-prefixer

This custom glamor prefixer allows you to use glamor with the following browser/device support.

```ts
const browserList = {
    chrome: 41, // Google search bot
    firefox: 52,
    android: 4, // mainly needed for Samsung browser
    ios_saf: 9,
    safari: 9,
    ie: 10,
    edge: 13,
}
```


## Installing

```sh
yarn add swm-glamor-prefixer
```

## Usage

In an entry file import applyPrefixer and call it before using glamor.

ie.

```ts
import { applyPrefixer } from 'swm-glamorous-prefixer'

applyPrefixer()
```
