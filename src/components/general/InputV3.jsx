import { forwardRef } from "react"

const InputV3 = forwardRef(({ type = "text", id, className, placeholder, iconInput, labelInput, ...rest }, ref) => {
    return (
        <div className="relative flex flex-col justify-center items-center">
            <input
                type={type}
                id={id}
                ref={ref}
                className={`w-full h-[56px] rounded-[10px] border border-medium-soft-green mt-3 place-content-start p-5 pl-10 text-left focus:outline-soft-green  text-gray font-barlow placeholder:text-medium-soft-green text-long-paragrah ${className ? " " + className : ""}`}
                placeholder={placeholder}
                {...rest}
            />
            {iconInput && (
                <img
                    src={iconInput}
                    alt={labelInput}
                    className="absolute left-3 top-10 transform -translate-y-1/2 fill-dark-green"
                />
            )}
        </div>
    )
})

export default InputV3