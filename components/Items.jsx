import React from 'react'

const Items = (props) => {
  return (
    <div className="w-full">
        <span className="text-lg font-medium text-slate-700 my-1">{props.text.title}</span>
        <p className="text-md text-slate-600 my-1">{props.text.content}</p>
    </div>
  )
}

export default Items