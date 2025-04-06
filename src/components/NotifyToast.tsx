import { Toast } from 'flowbite-react';
import useNotifyToast from '../states/useNotifyToast.ts';
import { useEffect } from 'react';

const NotifyToast = () => {
    const { message, icon, resetNotify } = useNotifyToast((state) => state);

    useEffect(() => {
        setTimeout(() => resetNotify(), 2000);
    }, [message]);

    const renderIcon = () => {
        if (!icon) {
            return <span></span>;
        }
        return (
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                {icon}
            </div>
        );
    };

    return (
        <Toast
            className={`absolute end-2 bottom-2 w-2/3 transition-all duration-300 sm:w-1/6 ${
                message ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => resetNotify()}
        >
            {renderIcon()}
            <div className="m-auto text-sm font-normal">{message}</div>
        </Toast>
    );
};
export default NotifyToast;
