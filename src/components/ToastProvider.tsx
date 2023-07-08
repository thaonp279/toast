import { createContext, FC, useContext, useState } from 'react';
import { Toast, ToastType } from '../types/toast';
import Toaster from './Toaster';
type ToastProviderProps = {
    children: React.ReactNode;
    autoCloseDuration?: number;
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

/**
 * ToastProvider is a component that allows users to manage and render toast notifications.
 * PROVIDER: ToastProvider functions as a React Context that should be added to the top of the application.
 * Example of using ToastProvider:
 * <ToastProvider {...props}>
 *      {children}
 * </ToastProvider>
 * 
 * CONSUMER: All children of ToastProvider can use the useToast hook to access:
 * Example of using useToast: const toast = useToast()
 * 
 * 1. toasts: a list of all current toast notifications
 * 2. add: a method to add toast notification
 * 3. dismiss: a method to dismiss toast notification
 * 
 * @reference ToastNotification: component for individual toast notification
 * @reference Toaster: container for all toast notifications
 * @param autoCloseDuration in ms. duration after which notification is automatically removed. default = 6000ms
 * @param children ReactNode that receives the ToastContext
 * 
 * @render all existing toast notifications above all other DOM elements and at the bottom of the page with the latest on top.
 */
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
