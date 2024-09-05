import { forwardRef } from "react"

const InputV1 = forwardRef(({ type = "text", id, className, placeholder, ...rest }, ref) => {
    return (
        <input
            type={type}
            id={id}
            ref={ref}
            className={`w-full h-[41px] rounded-[10px] border border-medium-soft-green mt-3 place-content-start p-3 text-left font-light text-medium-soft-green font-barlow placeholder:text-gray text-long-paragrah ${className ? " " + className : ""}`}
            placeholder={placeholder}
            {...rest}
        />
    )
})

export default InputV1