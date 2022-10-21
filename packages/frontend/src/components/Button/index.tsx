import React from 'react'
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'secondary' | 'acccent'
  children: React.ReactNode
}

const Button: React.FC<IButtonProps> = ({ children, color }) => {
  return (
    <button
      type='submit'
      className={`focus:ring-4 focus:outline-none font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center bt_color-${color}`}
    >
      {children}
    </button>
  )
}

export default React.memo(Button)
