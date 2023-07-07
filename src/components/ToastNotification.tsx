import { CheckCircleOutline, Close } from "@mui/icons-material";
import { Grid, IconButton, SxProps, Typography } from "@mui/material";
import { FC } from "react";
import { Toast, ToastType, useToast } from "./ToastProvider";

const ToastNotification: FC<Toast> = ({ id, type, message, autoCloseTimeout, title = type }) => {
    const toast = useToast();
    const handleDismiss = () => {
        toast.dismiss(id)
    }
    const defaultSx: SxProps = {
        borderRadius: 1,
        padding: 1,
    }

    const sx: { [key in ToastType]: SxProps } = {
        success: {
            bgcolor: '#6FCF97'
        },
        warning: {
            bgcolor: '#F2C94C'
        },
        danger: {
            bgcolor: '#EB5757'
        }
    }

    return (
        <Grid container direction='row' sx={{ ...defaultSx, ...sx[type] }} alignItems='center' gap={2}>
            <CheckCircleOutline />
            <Grid item flexGrow={1}>
                <Typography variant='body1' fontWeight={600} sx={{ textTransform: 'capitalize' }}>{title}</Typography>
                <Typography variant="body2">{message} </Typography>
            </Grid>
            <Grid item alignSelf='flex-start'>
                <IconButton onClick={handleDismiss}>
                    <Close fontSize="small" />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default ToastNotification