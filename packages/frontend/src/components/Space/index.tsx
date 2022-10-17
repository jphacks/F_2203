import React from 'react'

interface SpacerProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  size: number
  axis?: 'vertical' | 'horizontal'
  style?: Object
}

const Spacer = ({ size, axis, style = {}, ...delegated }: SpacerProps) => {
  const width = axis === 'vertical' ? 0 : size
  const height = axis === 'horizontal' ? 0 : size
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  )
}
export default Spacer
