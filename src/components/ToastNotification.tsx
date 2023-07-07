import { CheckCircleOutline, Close, DoDisturbAlt, ErrorOutline } from "@mui/icons-material";
import { Grid, Grow, IconButton, SxProps, Typography } from "@mui/material";
import { FC } from "react";
import { Toast, ToastType, useToast } from "./ToastProvider";

const ToastNotification: FC<Toast> = ({ id, type, message, title = type }) => {
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

    const icons: { [key in ToastType]: React.ReactNode } = {
        success: <CheckCircleOutline />,
        warning: <ErrorOutline />,
        danger: <DoDisturbAlt />
    }

    return (
        <Grow in={true}>
            <Grid container direction='row' sx={{ ...defaultSx, ...sx[type] }} justifyContent='space-between' alignItems='center'>
                {icons[type]}
                <Grid container direction='column' item xs={9} md={10} paddingLeft={2} paddingRight={2} sx={{ overflowX: 'hidden', textOverflow: 'ellipsis' }}>
                    <Typography variant='body1' fontWeight={600} sx={{ textTransform: 'capitalize' }} noWrap>{title}</Typography>
                    <Typography variant="body2">{message} </Typography>
                </Grid>
                <Grid item alignSelf='flex-start'>
                    <IconButton onClick={handleDismiss}>
                        <Close fontSize="small" />
                    </IconButton>
                </Grid>
            </Grid>
        </Grow>
    )
}

export default ToastNotification