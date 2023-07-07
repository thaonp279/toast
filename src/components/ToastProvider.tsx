import { createContext, FC, useContext, useState } from 'react';
import Toaster from './Toaster';
type ToastProviderProps = {
    children: React.ReactNode;
    autoCloseDuration?: number;
}

export enum ToastType {
    success = 'success',
    danger = 'danger',
    warning = 'warning'
}
export type Toast = {
    id: number;
    type: ToastType;
    title?: string;
    message: string;
    autoCloseTimeout: ReturnType<typeof setTimeout>;
}

type ToastContextType = {
    toasts: Toast[];
    add: (type: ToastType, message: string, title?: string) => void
    dismiss: (id: number) => void
}

const ToastContext = createContext<ToastContextType>({
    toasts: [], add: () => { }, dismiss: () => { }
})
export const useToast = () => useContext(ToastContext)

const ToastProvider: FC<ToastProviderProps> = ({ autoCloseDuration = 6000, children }) => {
    const [toasts, setToasts] = useState<Toast[]>([])
    const [id, setId] = useState<number>(0)
    const add = (type: ToastType, message: string, title?: string): void => {
        const autoCloseTimeout = setTimeout(() => {
            dismiss(id);
        }, autoCloseDuration)
        setToasts(prev => [...prev, {
            id,
            type,
            message,
            title,
            autoCloseTimeout
        }])
        setId(i => i + 1)
    }

    const dismiss = (id: number) => {
        setToasts(prev => {
            const toRemove = prev.filter(t => t.id === id)
            toRemove.forEach(t => clearTimeout(t.autoCloseTimeout))
            return prev.filter(t => t.id !== id)
        })
    }

    const toast = { toasts, add, dismiss }

    return (
        <ToastContext.Provider value={toast}>
            <Toaster toasts={toasts} />
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;
