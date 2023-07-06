import { CheckCircleOutline, Close } from "@mui/icons-material";
import { Box, Container, Grid, SxProps, Typography } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";
import { FC } from "react";
import { Toast, ToastType } from "./ToastProvider";

const ToastNotification: FC<Toast> = ({ id, type, message, autoCloseTimeout }) => {
    const defaultSx: SxProps = {
        borderRadius: 1,
        padding: 1,
    }

    const sx: { [key in ToastType]: SxProps } = {
        success: {
            bgcolor: '#6FCF97'
        },
        warning: {

        },
        danger: {

        }
    }
    return (
        <Grid container direction='row' sx={{ ...defaultSx, ...sx.success }} alignItems='center' gap={2}>
            <CheckCircleOutline />
            <Grid item flexGrow={1}>
                <Typography variant='body1' fontWeight={600}>Success</Typography>
                <Typography variant="body2">{message} </Typography>
            </Grid>
            <Grid item alignSelf='flex-start'>
                <Close fontSize="small" />
            </Grid>
        </Grid>
    )
}

export default ToastNotification