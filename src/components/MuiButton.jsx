import { Stack, Button } from '@mui/material'
import React from 'react'

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                <Button variant="text">Hello World</Button>
                <Button variant="contained">Hello World</Button>
                <Button variant="outlined">Hello World</Button>
            </Stack>
            
            <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success">Success</Button>
            </Stack>
        </Stack>
    )
}