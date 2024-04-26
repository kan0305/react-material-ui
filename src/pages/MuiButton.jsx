import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GitHubIcon from "@mui/icons-material/GitHub";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";

export const MuiButton = () => {
    const [format, setFormat] = useState([]);

    const handleFormatChange = (event, newFormats) => {
        setFormat(newFormats);
    };

    const [format2, setFormat2] = useState(null);

    const handleFormatChange2 = (event, newFormats) => {
        setFormat2(newFormats);
    };

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

            <Stack direction="row">
                <ToggleButtonGroup aria-label="text formatting" value={format} onChange={handleFormatChange}>
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction="row">
                <ToggleButtonGroup
                    aria-label="text formatting"
                    value={format2}
                    onChange={handleFormatChange2}
                    size="small"
                    color="secondary"
                    orientation="vertical"
                    exclusive // only one can be selected
                >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};
