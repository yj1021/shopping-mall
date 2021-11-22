import React, { ReactElement } from 'react'
import CountUp from 'react-countup'

interface Props {
    start?: number;
    end: number;    
}

export default function CountUpComp({
    start = 0,
    end
}: Props): ReactElement {
    return (
        <>
            <CountUp 
                start={start}
                end={end}
                duration={1}
                separator=","
            />
        </>
    )
}
