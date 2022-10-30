import styles from './Button.module.css';
import Link from 'next/link';

const Button = ({ variant, onClick, text, children, href }) => {
  return (
    <Link 
        onClick={onClick} 
        href={href ? href : '#'}
        className={`${styles.btn} ${styles[variant]}`}
    >
        {children ? children : text}
    </Link>
  )
}

export default Button