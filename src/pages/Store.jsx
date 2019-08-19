import React, { useState } from 'react'
import Pagination from '../components/Pagination'
import AssetGrid from '../components/AssetGrid.jsx'

// console.log(store.getState())

export default () => {
    console.log(useState)
    return (
        <section>
            <Pagination />
            <AssetGrid />
            <Pagination />
        </section>
    )
}