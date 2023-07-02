import { HTMLInputTypeAttribute } from "react";

export const CustomInput = (name:string,label:string,type:HTMLInputTypeAttribute="text") => <div className="field">
    <label htmlFor={name}>{label}</label>
    <input
        id={name}
        name={name}
        required
        type={type}
        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
    />
</div>