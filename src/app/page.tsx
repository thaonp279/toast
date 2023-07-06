"use client"
import { ToastType, useToast } from '@/components/ToastProvider';
import { Button, Typography } from '@mui/material';

export default function Home() {

  const onClick = () => {
  }

  return (
    <>
      <Button variant='contained' onClick={onClick}>Button</Button>
    </>
  )
}
