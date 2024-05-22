import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  href: string;
}

const Button = ({ label, href }: ButtonProps) => {
  return (
    <Link href={href} passHref>
      <button className={styles.button}>{label}</button>
    </Link>
  );
};

export default Button;
