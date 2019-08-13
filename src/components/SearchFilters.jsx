import React, { useState } from 'react'
import Input from './Input'

export default function SearchFilters () {
    let [queryVal, setQueryVal] = useState(undefined)

    return (
        <div className="search-filters-container">
            <Input
                cb={ (ev) => setQueryVal(ev.currentTarget.value) }
            >

            </Input>
        </div>
    )
}