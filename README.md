**ToastProvider** is a component that allows users to manage and render toast notifications.

Toast notifications are displayed on top of the existing application and dismissed automatically after a duration. Users can also dismiss the notification by clicking the close button.

## Demo

![ezgif com-video-to-gif](https://github.com/thaonp279/toast/assets/77321721/c6295602-fdf3-4335-9752-7c1ba9732948)

## Usage
**PROVIDER**: ToastProvider functions as a React Context that should be added to the top of the application.

```jsx
import ToastProvider from '@/components/ToastProvider'
  
function App(children){
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  );
}

```

**CONSUMER**: All children of ToastProvider can use the useToast hook to access toasts, add method and dismiss method.
```jsx
import { useToast } from '@/components/ToastProvider';

function Child() {
  const toast = useToast()

  toast.add(toastType, message, title)
  toast.dismiss(toastId)
  const allToasts = toast.toasts
  ...
}
```

## Install and Run the Demo
```
npm i
npm run dev
```
