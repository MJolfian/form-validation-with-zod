import { twMerge } from "tailwind-merge"

interface IinputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label : string,
    error ?: string,
    divClassName ?: string,
    labelClassname ?: string
}
const TextInput : React.FC<IinputProps> = ({label, id, error, divClassName = '', className, labelClassname,  ...rest}) => {
    return (
        <div className={divClassName}>
            <label htmlFor={id} className={`text-gray-600 cursor-pointer ${labelClassname ?? ''} /*or: ${twMerge(labelClassname)}*/`}>{label}</label>
            <input className={twMerge('w-full border border-gray-300 rounded-lg focus:outline-none focus:border-x-0 focus:border-t-0 focus:rounded-b-none focus:border-b focus:border-b-black pl-2 py-1', className)} id={id} {...rest}/>
            {/* or: <input className={twMerge(`w-full border border-gray-300 rounded-lg focus:outline-none focus:border-x-0 focus:border-t-0 focus:rounded-b-none focus:border-b focus:border-b-black pl-2 py-1 ${className ?? ''}`)} type="text" id={id}/> */}
            { error && <p className="text-xs text-red-500 mt-0.5">{error}</p> }
        </div>
    )
}
export default TextInput;