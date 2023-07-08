
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
};
