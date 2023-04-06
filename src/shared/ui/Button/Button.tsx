import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import cn from "classnames"
import styles from "./Button.module.scss"

interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
    appearance?: 'main' | 'error';
}

function Button({className, appearance = 'main', children, ...rest}: IButton) {
    return (
        <button className={cn(styles.button, className, {
            [styles.main]: appearance === 'main',
            [styles.error]: appearance === 'error',
        })}
                {...rest}
        >
            {children}
        </button>
    );
}

export default Button;