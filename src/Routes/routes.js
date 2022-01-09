import React from 'react';

// const Home = React.lazy(() => import('./pages/Home'))
const FundList = React.lazy(() => import('../pages/Fund/List'))
const FundCreate = React.lazy(() => import('../pages/Fund/Create'))
const MaterialList = React.lazy(() => import('../pages/Material/List'))
const MerkList = React.lazy(() => import('../pages/Merk/List'))
const TypeList = React.lazy(() => import('../pages/Type/List'))
const routes = [
 { path: '/fund/create', Component: FundCreate },
 { path: '/funds', Component: FundList },
 { path: '/material', Component: MaterialList },
 { path: '/merks', Component: MerkList },
 { path: '/types', Component: TypeList },
//  { path: '/', Component: Home }
]
export default routes
