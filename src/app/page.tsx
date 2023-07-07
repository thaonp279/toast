"use client"
import { Toast, ToastType, useToast } from '@/components/ToastProvider';
import { Button, Grid } from '@mui/material';

async function createRandomToast(): Promise<Pick<Toast, 'title' | 'type' | 'message'>> {
  const toasts: Pick<Toast, 'title' | 'type' | 'message'>[] = [
    {
      type: ToastType.danger,
      title: 'Offer expiring',
      message: 'Your job offer is expiring in 2 hours.'
    }, {
      type: ToastType.warning,
      title: undefined,
      message: 'You have not completed your job profile.'
    }, {
      type: ToastType.success,
      title: 'Application submitted!',
      message: 'Your application has been submitted to recruiters.'
    }
  ]
  const randomIdx = Math.floor(Math.random() * toasts.length)
  return toasts[randomIdx]
}

export default function Home() {
  const toast = useToast();
  const onClick = () => {
    createRandomToast().then(t => toast.add(t.type, t.message, t.title))
  }

  return (
    <Grid container direction='column' alignItems='center' padding={10}>
        <Button variant='contained' onClick={onClick}>Random Toast</Button>
    </Grid>
  )
}
