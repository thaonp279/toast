"use client"
import { useToast } from '@/components/ToastProvider';
import { Toast, ToastType } from "@/types/toast";
import { BreakfastDiningTwoTone } from '@mui/icons-material';
import { IconButton } from '@mui/material';

async function createRandomToast(): Promise<Pick<Toast, 'title' | 'type' | 'message'>> {
  const toasts: Pick<Toast, 'title' | 'type' | 'message'>[] = [
    {
      type: ToastType.danger,
      title: 'Offer expiring',
      message: 'Your job offer is expiring in 2 hours. Please check your offer and let the recruit know if you are happy with the offer.'
    }, {
      type: ToastType.warning,
      title: undefined,
      message: 'You have not completed your job profile.'
    }, {
      type: ToastType.success,
      title: 'Application submitted and sent to recruiter!',
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
    <IconButton onClick={onClick}>
      <BreakfastDiningTwoTone fontSize='inherit' color='warning' sx={{ fontSize: '10rem' }} />
    </IconButton>
  )
}
