import { ComponentProps } from "react";
import "./Button.css";

// با این تعریف تایپ کامپوننت من تموم پراپ های تگ button رو میگیره
type Tvariant = "primary" | "danger" | "success" | "info" | "warning" | 'secondary';
type Tbutton = ComponentProps<"button"> & {
  variant: Tvariant;
};

function Button({ children, style , variant, ...rest }: Tbutton) {
  console.log(checkvariant(variant));
  return <button style={{...style ,...checkvariant(variant)}}  {...rest}>{children}</button>;
}

// check variant
function checkvariant(variant: Tvariant) {
  if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "info") {
    return { backgroundColor: "orange", color: "white" };
  } else if (variant === "primary") {
    return { backgroundColor: "blue", color: "black" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "black" };
  }
  else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "white" };
  }
}

export default Button;
