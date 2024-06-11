import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src='https://images.pexels.com/photos/25384987/pexels-photo-25384987/free-photo-of-bi-n-thien-nhien-n-c-da.jpeg?auto=compress&cs=tinysrgb&w=400' alt='Hoa' />
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon = {faCheckCircle}/>
            </p>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>;
}

export default AccountItem;
