// const [name, setName] = useState<string>('');
// const inputRef = useRef<Input>(null);
//inputRef.current?.focus();


// <Input type="text" label="User Name" placeholer="UserName" value={name} onChange={} ref={inputRef}/>
// <Input type="password" label="Pwd" placeholer="Pwd"/>


import React, { Ref, useImperativeHandle } from "react";
type InputProps = {
    type: string;
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
type InputRefProps = {
    focus: () => void;
    value: string | undefined;
    test: () => void;

}

const Input = React.forwardRef(function Input({type, label, placeholder, value, onChange}: InputProps, 
                                                                                ref: Ref<InputRefProps>){

    const inputRef = React.useRef<HTMLInputElement>(null);                                                                                    
    useImperativeHandle(ref, () => {
        return {
            focus: () => { inputRef.current?.focus(); },
            value: inputRef.current?.value,
            test: () => { alert("calling test from Input") }
        }
    });

    return (
        <div className="form-group">
            <label htmlFor="input">{label}</label>
            <input ref={inputRef} id="input" className="form-control" type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )

})

export default Input;