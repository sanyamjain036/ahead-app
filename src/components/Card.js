import React from 'react'

const Card = ({emoji,classes}) => {
    return (
        <div className={`p-8 rounded-lg min-w-[20rem] ${classes}`}>
            <div className="text-4xl mb-5">{emoji}</div>
            <div className="font-bold mb-2">Lorem, ipsum dolor.</div>
            <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, provident.</div>
        </div>
    )
}

export default Card