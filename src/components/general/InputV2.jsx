import { forwardRef } from "react";

const InputV2 = forwardRef(({ type = "text", id, className, ...rest }, ref) => {
    return (
        <div className="relative">
            <input
                type={type}
                id={id}
                ref={ref}
                className={`peer h-[30px] w-[200px] rounded-full text-navbar font-barlow border bg-medium-soft-green shadow-inner-inputV2 border-soft-green pl-8 pr-4 text-sm text-soft-green outline-none transition-all autofill:bg-medium-soft-green invalid:border-mood-angry invalid:text-mood-angry focus:border-soft-green focus:outline-none focus-visible:outline-none placeholder:text-light-gray disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-gray ${className || ""}`}
                {...rest}
            />
            <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 fill-soft-green" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M4.358 10.231a5.888 5.888 0 0 1 5.884-5.884 5.888 5.888 0 0 1 5.884 5.884 5.883 5.883 0 1 1-11.768 0Zm-2.354 0c0 4.543 3.696 8.231 8.23 8.231a8.19 8.19 0 0 0 4.93-1.643c.036.05.08.093.115.129l4.708 4.707c.236.223.53.345.832.345a1.184 1.184 0 0 0 1.177-1.098v-.165a1.2 1.2 0 0 0-.345-.753l-4.707-4.708c-.036-.036-.079-.086-.13-.115a8.175 8.175 0 0 0 1.644-4.93C18.458 5.69 14.763 2 10.228 2 5.7 1.993 2.004 5.689 2.004 10.231Z" />
            </svg>
        </div>
    );
});

export default InputV2;
