import React, { useState } from 'react'
import Pagination from '../components/Pagination'
import AssetGrid from '../components/AssetGrid.jsx'

export default () => {
    let [computedItems] = useState(undefined)
    return (
        <section>
            <Pagination />
            <AssetGrid items={computedItems} />
            <Pagination />
        </section>
    )
}