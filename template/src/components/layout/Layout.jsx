import { cn } from '@utils';
import Header from './Header';
import Footer from './Footer';

const Layout = ({
    children,
    showHeader = true,
    showFooter = true,
    headerProps = {},
    footerProps = {},
    className,
}) => {
    return (
        <div className="min-h-screen flex flex-col">
            {showHeader && <Header {...headerProps} />}
            <main className={cn('flex-1', className)}>
                {children}
            </main>
            {showFooter && <Footer {...footerProps} />}
        </div>
    );
};

export default Layout;
