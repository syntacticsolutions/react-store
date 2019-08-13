import React, { useState } from 'react'
import Input from '../components/Input'

export default function () {
    const [val, setVal] = useState('')

    const eventSet = ev => {
        this.setVal(ev.currentTarget.value)
    }

    return (<div><Input value={ val } onInput={ () => eventSet}/></div>)
}