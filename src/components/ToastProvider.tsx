import { createContext, FC, useContext, useState } from 'react'
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
    message: string;
    autoCloseTimeout: ReturnType<typeof setTimeout>;
}

type ToastContextType = {
    toasts: Toast[];
    add: (type: ToastType, message: string) => void
    dismiss: (id: number) => void
}

const ToastContext = createContext<ToastContextType>({
    toasts: [], add: () => { }, dismiss: () => { }
})
export const useToast = () => useContext(ToastContext)

const ToastProvider: FC<ToastProviderProps> = ({ autoCloseDuration = 1000, children }) => {
    const [toasts, setToasts] = useState<Toast[]>([])
    const [id, setId] = useState<number>(0)
    const add = (type: ToastType, message: string): void => {
        const autoCloseTimeout = setTimeout(() => {
            dismiss(id);
        }, autoCloseDuration)
        setToasts(prev => [...prev, {
            id,
            type,
            message,
            autoCloseTimeout
        }])
        setId(i => i + 1)
    }

    const dismiss = (id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id))
    }

    const toast = { toasts, add, dismiss }

    return (
        <ToastContext.Provider value={toast}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;
