import clsx from 'clsx';
type Props = {
    children?: React.ReactNode;
    className?: string;
};

const Container = ({ children, className = '' }: Props) => {
    return (
        <div className={clsx('container mx-auto', className, 'relative')}>
            {children}
        </div>
    );
};

export default Container;
