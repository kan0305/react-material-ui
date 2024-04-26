import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Box, InputAdornment, Paper, Stack, TextField } from "@mui/material";
import React from "react";

export const MuiForm = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#97E7E1", opacity: "0.6" }}>
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "600px",
                    p: 3,
                    m: 3,
                    // bgcolor: "#BED7DC",
                    bgcolor: "#FFF",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <PeopleAltOutlinedIcon sx={{ fontSize: "150px", color: "#000" }} />
                </Box>
                <Stack direction="column" spacing={1} width={"40%"}>
                    <TextField
                        type="text"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">{<AccountCircle />}</InputAdornment>,
                        }}
                        placeholder="Enter your name"
                        size="small"
                        fullWidth
                        required
                    />
                    <TextField
                        type="password"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">{<LockOutlinedIcon />}</InputAdornment>,
                        }}
                        placeholder="Enter your password"
                        size="small"
                        fullWidth
                        required
                    />
                </Stack>
            </Paper>
        </Box>
    );
};
