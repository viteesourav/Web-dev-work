import { useEffect, useState } from "react"

export default function PassStrength({passStatus}) {

    return (
        <span>Password Strength: 
            <strong style={{
                color: `${passStatus.indicator}`,
                margin: "0.4rem"
            }}
            >{passStatus.state}</strong>
        </span>
    )
}