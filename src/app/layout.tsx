"use client"
import ToastProvider from '@/components/ToastProvider'
import { createTheme, Grid, Slider, ThemeProvider, Typography } from '@mui/material'
import { useState } from 'react'
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
  palette: {
    primary: {
      main: '#fe6607'
    }
  }
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [autoCloseDuration, setAutoCloseDuration] = useState<number>(6000);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>

        <ThemeProvider theme={theme}>
          <Grid container direction='column' alignItems='center' padding={2} paddingTop={20}>
            <Typography variant='h4' fontWeight={600}>Get a Toast!</Typography>
            <ToastProvider autoCloseDuration={autoCloseDuration}>
              {children}
            </ToastProvider>
            <Slider sx={{ marginTop: 2, maxWidth: 200 }} value={autoCloseDuration} min={500} max={10000} onChange={(_, val) => setAutoCloseDuration(val as number)} valueLabelDisplay="on" />
            <Typography fontWeight={600} sx={{ color: 'grey' }}>Auto Close Duration (ms) </Typography>
          </Grid>
        </ThemeProvider>
      </body>
    </html >
  )
}
