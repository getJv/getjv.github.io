import { create } from 'zustand';

export interface NotifyToastState {
    message: string | null;
    icon?: React.ReactNode | null;
    setNotify: (message: string, icon?: React.ReactNode) => void;
    resetNotify: () => void;
}

const useNotifyToast = create<NotifyToastState>((set) => ({
    message: null,
    icon: null,
    setNotify: (message, icon = null) => {
        set({ message, icon });
    },
    resetNotify: () => {
        set({ message: null, icon: null });
    },
}));

export default useNotifyToast;
