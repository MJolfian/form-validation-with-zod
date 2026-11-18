import React from "react";
import TextInput from "../atoms/textinput";
import UploadInput from "../atoms/upload-input";
import { formSchema, type FormSchema } from "../validation/form-schema";
import toast from "react-hot-toast";


const Form = () => {
    const [values, setV] = React.useState<FormSchema>({
        company : '',
        nature : '',
        address : '',
        postcode : '',
        contactn : '',
        contactp : '',
        email : '',
        linkedin : '',
        talk : ''
    });
    const [errors, setE] = React.useState<Partial<FormSchema>>({});

    // const isFormValid = Object.keys(errors).length === 0 && Object.values(values).every(val => val.trim() !== '');
    const isFormValid = formSchema.safeParse(values).success;;
    
    // const [btns, setbtns] = React.useState(false);
    const onChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const {name, value} = event.target;
        const newV = {...values, [name as keyof FormSchema] : value}
        setV(newV); //we can also write [name as keyof Ivalues] or: setV(prev => ({...prev, [name as keyof Ivalues] : value}));  or: setV(prev => { return {...prev, [name] : value}});
        // console.log('value: ',value, ' values: ',values);
        
        const result = formSchema.safeParse(newV)
        
        const newErr : Record<string , string> = {}; // ai: const newErr: Partial<Record<keyof FormSchema, string>> = {};
        if(!result.success){
            result.error.issues.forEach(issue =>{
                const field = issue.path[0] as string;  // or: String(issue.path[0])
                // newErr[field] = issue.message;

                if (newV[field as keyof FormSchema] !== "") {
                newErr[field] = issue.message;
                }});
            setE(newErr);
            // setbtns(false);
            console.log(newErr);
            
            return;
        }
        setE({});
        // setbtns(true)

    }
        const borderColor = (name : keyof FormSchema) => {
            // if(!errors[name]) return 'border-green-500';
            if(!errors[name] && values[name as keyof typeof values].trim()) return 'border-green-500 focus:border-b-green-500';
            if(errors[name] && values[name as keyof typeof values]) return 'border-red-500 focus:border-b-red-500';
        }
        
        
    const onSubmit : React.SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const result = formSchema.safeParse(values);
        console.log(errors);
        // if(Object.keys(errors).length === 0 && Object.values(values).every(item => item !== '')) {
        if(result.success) {
            toast.success('پرسشنامه با موفقیت تکمیل شد.');
            console.log(result.data);
            
        }
    }

    return (
        <form className="space-y-3" onSubmit={onSubmit}>
            <TextInput onChange={onChange} value={values.company} error={errors['company']} label='Your company name' name='company' id="company" className={borderColor('company')}/>
            <TextInput onChange={onChange} value={values.nature} error={errors['nature']} label='Nature of bussiness' name='nature' id="nature" className={borderColor('nature')}/>
            <div className="flex gap-x-2">
                <TextInput onChange={onChange} value={values.address} error={errors['address']} label='Address' name='address' id="address" divClassName="flex-3" className={borderColor('address')}/>
                <TextInput onChange={onChange} value={values.postcode} error={errors['postcode']} label='Postcode' name='postcode' id="postcode" divClassName="flex-1" className={borderColor('postcode')}/>
            </div>
            <TextInput onChange={onChange} value={values.contactn} error={errors['contactn']} label='Contact name' name='contactn' id="contactn" className={borderColor('contactn')}/>
            <TextInput onChange={onChange} value={values.contactp} error={errors['contactp']} label='Contact phone' name='contactp' id="contactp" className={borderColor('contactp')}/>
            <TextInput onChange={onChange} value={values.email} error={errors['email']} label='Email' name='email' id="email" className={borderColor('email')}/>
            <TextInput onChange={onChange} value={values.linkedin} error={errors['linkedin']} label='Linkedin' name='linkedin' id="linkedin" className={borderColor('linkedin')}/>
            <TextInput onChange={onChange} value={values.talk} error={errors['talk']} label='Lets talk about your idea' name="talk" id="talk" className={borderColor('talk')}/>
            <UploadInput/>
            <button disabled={!isFormValid} type="submit" className="bg-[#009017] text-white w-full py-1 cursor-pointer font-semibold disabled:bg-red-400 disabled:cursor-not-allowed">submit</button>
            <TextInput onChange={onChange}  label="i want to protect my data by signing an nda" id="lastchecked" type="checkbox" className="cursor-pointer w-auto -order-1" divClassName="cursor-pointer flex gap-x-2" labelClassname="text-sm"/>
        </form>
    )

}
export default Form;


//  ai solution   https://chatgpt.com/s/t_6af70a683a808191844be6f2864affac

// const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//   const { name, value } = event.target;
//   const key = name as keyof FormSchema;

//   // Update value
//   setV(prev => ({
//     ...prev,
//     [key]: value
//   }));

//   // اگر خالی بود، خطا و وضعیت اعتبار را پاک کن
//   if (!value.trim()) {
//     setE(prev => {
//       const newErrors = { ...prev };
//       delete newErrors[key];
//       return newErrors;
//     });

//     setValidFields(prev => ({
//       ...prev,
//       [key]: false
//     }));

//     return;
//   }

//   // Validate only the current field
//   const result = formSchema.shape[key].safeParse(value);

//   if (!result.success) {
//     setE(prev => ({
//       ...prev,
//       [key]: result.error.issues[0].message
//     }));

//     setValidFields(prev => ({
//       ...prev,
//       [key]: false
//     }));

//     return;
//   }

//   // Field is valid
//   setE(prev => {
//     const newErrors = { ...prev };
//     delete newErrors[key];
//     return newErrors;
//   });

//   setValidFields(prev => ({
//     ...prev,
//     [key]: true
//   }));
// };

// <TextInput
//   onChange={onChange}
//   value={values.company}
//   error={errors.company}
//   name="company"
//   label="Your company name"
//   id="company"
//   className={
//     errors.company
//       ? "border-red-500"
//       : validFields.company
//         ? "border-green-500"
//         : ""
//   }
// />