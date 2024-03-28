import { ComponentProps } from 'react'
import './Button.css'


// با این تعریف تایپ کامپوننت من تموم پراپ های تگ button رو میگیره
type Tbutton =ComponentProps<'button'>

function Button({children , ...rest} : Tbutton) {
  return (
  <button {...rest}>
    {children}
  </button>
  )
}

export default Button
