"use client"
import { ToastType, useToast } from '@/components/ToastProvider';
import { Button, Typography } from '@mui/material';

export default function Home() {
  const { toasts } = useToast();

  const onClick = () => {
  }

  return (
    <>
      <Button variant='contained' onClick={onClick}>Button</Button>
      <Typography>
        {JSON.stringify(toasts)}
      </Typography>
    </>
  )
}
