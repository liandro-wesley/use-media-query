# use-media-query

> A package for you to use in your projects with React JS or Next JS. Basically, it provides a boolean return for the set breakpoints

[![NPM](https://img.shields.io/npm/v/use-media-query.svg)](https://www.npmjs.com/package/use-media-query) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-media-query
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-media-query'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [liandro-wesley](https://github.com/liandro-wesley)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
