import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    large = false,
    small = 'medium',
    children,
    onClick,
    ...passProp
}) {
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
    });
    let Comp = 'button';
    const prop = {
        onclick,
        ...passProp,
    };
    if (to) {
        prop.to = to;
        Comp = Link;
    } else if (href) {
        prop.href = href;
        Comp = 'a';
    } else
        return (
            <Comp className={classes} {...prop} {...passProp}>
                Log in
            </Comp>
        );
}
export default Button;
