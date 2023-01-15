import "./input.css"
export const Input = ({id , labelName, inputType , ...rest}) => {
  return (
   
    <div className="input-wrapper">
        <label className="label"  htmlFor={id} >{labelName}</label>
        <input type={inputType} id={id} {...rest}/>
    </div>

  );
};
