import React from 'react';

// const Home = React.lazy(() => import('./pages/Home'))
const FundList = React.lazy(() => import('../pages/Fund/List'))
const FundCreate = React.lazy(() => import('../pages/Fund/Create'))
const MaterialList = React.lazy(() => import('../pages/Material/List'))
const MaterialCreate = React.lazy(() => import('../pages/Material/Create'))
const MerkList = React.lazy(() => import('../pages/Merk/List'))
const MerkCreate = React.lazy(() => import('../pages/Merk/Create'))
const TypeList = React.lazy(() => import('../pages/Type/List'))
const TypeCreate = React.lazy(() => import('../pages/Type/Create'))
const MachineCreate = React.lazy(() => import('../pages/Machine/Create'))
const InventoryBooksList = React.lazy(() => import('../pages/InventoryBook/List'))
const InventoryBooksCreate = React.lazy(() => import('../pages/InventoryBook/Create'))
const routes = [
 { path: '/fund/create', Component: FundCreate },
 { path: '/funds', Component: FundList },
 { path: '/material/create', Component: MaterialCreate },
 { path: '/materials', Component: MaterialList },
 { path: '/merk/create', Component: MerkCreate },
 { path: '/merks', Component: MerkList },
 { path: '/types', Component: TypeList },
 { path: '/type/create', Component: TypeCreate },
 { path: '/machine/create', Component: MachineCreate },
 { path: '/inventoryBooks', Component: InventoryBooksList },
 { path: '/inventoryBook/Create', Component: InventoryBooksCreate },
//  { path: '/', Component: Home }
]
export default routes
