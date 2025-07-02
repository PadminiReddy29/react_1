import { Input } from "antd";

const InputComponent = (props) => {
    const {placeholder,onChange, name, label}=props;

    return (
<div className= "Input_row">
 <label><b>{label} </b></label>
<Input placeholder={placeholder} name={name} onChange={onChange} />
</div>
    )
}
export default InputComponent;