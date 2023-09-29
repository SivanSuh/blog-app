import React from "react"

export default interface SelectBoxProps {
    data:Array<any>
    onChange:(e:any) => void
    value:any
}