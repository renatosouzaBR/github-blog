import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Home } from '@/pages/Home'
import { IssueDetails } from '@/pages/IssueDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue-details" element={<IssueDetails />} />
      </Route>
    </Routes>
  )
}
