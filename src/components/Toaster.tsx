import { Box, Container, Grid } from "@mui/material";
import { FC } from "react";
import ToastNotification from "./ToastNotification";
import { Toast } from "./ToastProvider"

type ToasterProps = {
    toasts: Toast[];
}

const Toaster: FC<ToasterProps> = ({ toasts }) => {
    return (
        <Box sx={{ position: 'fixed', bottom: 20, width: '100%', zIndex: 10}}>
            <Container maxWidth='md'>
                <Grid direction='column-reverse' container gap={2}>
                    {toasts.map(t => <ToastNotification key={t.id} id={t.id} type={t.type} message={t.message} title={t.title} autoCloseTimeout={t.autoCloseTimeout} />)}
                </Grid>
            </Container>
        </Box>
    )
}

export default Toaster;