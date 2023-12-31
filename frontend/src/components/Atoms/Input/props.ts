import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export default interface InputProps {
    placeholder:string;
    type:"text" | "password" | "email" | "checkbox" 
    register: UseFormRegister<FieldValues>;
    errors?: FieldErrors | undefined;
    name?: string;
    required?: boolean;
    id?:string
    disabled?:boolean;
    value?:string
}