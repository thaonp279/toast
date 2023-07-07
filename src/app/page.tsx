"use client"
import { ToastType, useToast } from '@/components/ToastProvider';
import { Button, Typography } from '@mui/material';

export default function Home() {
  const toast = useToast();
  const onClick = () => {
    toast.add(ToastType.danger, 'message', 'title')
  }

  return (
    <>
      <Button variant='contained' onClick={onClick}>Button</Button>
    </>
  )
}
