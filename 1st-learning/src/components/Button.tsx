interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    );
};

export default Button;