import React from 'react'

import useMediaQuery from 'use-media-query'

const App = () => {
  const isMobile = useMediaQuery('(max-width: 48rem)')
  return (
    <div>
      You are on: {isMobile ? 'Mobile' : 'Desktop' }
    </div>
  )
}
export default App
