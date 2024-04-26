import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row" alignItems="center">
                <Button variant="text" onClick={() => alert("Hello World")}>
                    Hello World
                </Button>
                <Button variant="contained">Hello World</Button>
                <Button variant="outlined">Hello World</Button>
            </Stack>

            <Stack spacing={2} direction="row" alignItems="center">
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="error">
                    Error
                </Button>
                <Button variant="contained" color="warning">
                    Warning
                </Button>
                <Button variant="contained" color="info">
                    Info
                </Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
            </Stack>

            <Stack spacing={2} direction="row" alignItems="center">
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    Large
                </Button>
            </Stack>

            <Stack spacing={2} direction="row" alignItems="center">
                <Button variant="contained" startIcon={<AccountCircleIcon />}>
                    Account
                </Button>
                <IconButton aria-label="github" size="small" color="primary">
                    <GitHubIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="github" size="medium" color="#000">
                    <GitHubIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="github" size="large" color="#000">
                    <GitHubIcon fontSize="inherit" />
                </IconButton>
            </Stack>

            <Stack direction="row">
                <ButtonGroup variant="contained" size="small" color="secondary" orientation="vertical">
                    <Button>LEFT</Button>
                    <Button>CENTER</Button>
                    <Button>RIGHT</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    );
};
