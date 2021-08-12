# UseMediaQuery

> A package for you to use in your projects with React JS or Next JS. Basically, it provides a boolean return for the set breakpoints

[![NPM](https://img.shields.io/npm/v/@liandro-wesley/use-media-query.svg)](https://www.npmjs.com/package/@liandro-wesley/use-media-query) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
# NPM
npm install --save use-media-query

# YARN
yarn install use-media-query
```

## Usage

```tsx
import React from 'react'

import useMediaQuery from 'use-media-query'

const Example: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 425px)')
  return (
    <div>
      You are on: {isMobile ? 'Mobile' : 'Desktop'}
      <span>If this was helpful to you, could you please give this repository a star?</span>
    </div>
  )
}
```


## Follow me

[My Blog](https://liandrowesley.dev)

## License

MIT © [liandro-wesley](https://github.com/liandro-wesley)

---