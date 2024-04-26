import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Box, InputAdornment, Paper, Stack, TextField, Checkbox, FormControlLabel, Typography, Button } from "@mui/material";
import React from "react";

export const MuiForm = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#97E7E1" }}>
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "600px",
                    p: 3,
                    m: 3,
                    bgcolor: "#FFF",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <PeopleAltOutlinedIcon sx={{ fontSize: "150px", color: "#000" }} />
                </Box>
                <Stack direction="column" width={"60%"}>
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
                        sx={{ marginTop: 1 }}
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
                        sx={{ marginTop: 1 }}
                    />
                    <FormControlLabel control={<Checkbox sx={{ padding: "5px" }} size="small" />} label={<Typography sx={{ fontSize: "0.8rem" }}>Remember me</Typography>} sx={{ margin: "5px 0" }} />
                    <Button variant="contained">Login</Button>
                </Stack>
                <Stack direction="row" width={"60%"} justifyContent={"space-between"} alignItems={"center"} sx={{ marginTop: "5px" }}>
                    <Button sx={{ fontSize: "0.8rem" }}>Forgot password?</Button>
                    <Button sx={{ fontSize: "0.8rem" }}>Don't have an account?</Button>
                </Stack>
            </Paper>
        </Box>
    );
};
