import { forwardRef } from "react"

const InputV1 = forwardRef(({ type = "text", id, className, placeholder, ...rest }, ref) => {
    return (
        <input
            type={type}
            id={id}
            ref={ref}
            className={`w-full h-[56px] rounded-[10px] border border-medium-soft-green mt-3 place-content-start p-5 text-left focus:outline-soft-green  text-gray font-barlow placeholder:text-medium-soft-green text-long-paragrah ${className ? " " + className : ""}`}
            placeholder={placeholder}
            {...rest}
        />
    )
})

export default InputV1