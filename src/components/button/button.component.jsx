import './button.styles.scss'
const BUTTON_TYPE_CLASSES ={
    google: 'google-sign-in',
    submit: 'submit'
};



const Button = ({children, buttonType, ...otherProps}) => {
return(
<button className={`button-item ${BUTTON_TYPE_CLASSES[buttonType]}`}
  {...otherProps}>
 {children}
</button>
);
};
export default Button;