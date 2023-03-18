import { Routes, Route } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Checkout } from '@/pages/Checkout'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { PurchaseSuccessful } from '@/pages/PurchaseSuccessful'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/purchase-successful" element={<PurchaseSuccessful />} />
      </Route>
    </Routes>
  )
}
