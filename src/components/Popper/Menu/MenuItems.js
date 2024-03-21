import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick, separate }) {
    return (
        <Button
            className={cx('menu-item', {
                separate: data.separate,
            })}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItems;
