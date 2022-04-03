import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { RepositoryContainer } from './RepositoryContainer'

function App() {
  return (
    <div>
      <h1>SWR playground</h1>

      <ErrorBoundary fallback={<div>Error!</div>}>
        <Suspense fallback={<div>loading...</div>}>
          <RepositoryContainer />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
