
export default interface ModalProp{
    open:boolean;
    close:(e:boolean) => void
    title?:string
    onClick:() => void
}