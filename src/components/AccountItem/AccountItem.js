import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/abd95ae25a622e8cb244f24cdefce94f.jpeg?lk3s=a5d48078&x-expires=1710597600&x-signature=JH33mn0McRBJa6VjEvMJ8rjNSZ8%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Vu Hoang Anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('userName')}>hoagem.91</span>
            </div>
        </div>
    );
}
export default AccountItem;
