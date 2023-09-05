import React from 'react'
type MacCircleProps = {
    color: "#56E46D" | "#E4BC56" | "#E45656"
}
const MacCircle = ({color}: MacCircleProps) => {
    const classNameColor: string = `h-6 w-6 rounded-full bg-[#56E46D]` || `h-6 w-6 rounded-full bg-[#E4BC56]` || `h-6 w-6 rounded-full bg-[#E45656]`
  return (
    <div className={`h-6 w-6 rounded-full bg-[${color}]`}></div>
  )
}

export default MacCircle