export default interface ButtonProps {
    buttonName:string;
    type?: "button" | "submit"
    buttonType?:boolean
    linkHref?:string
    onClick?:any
}