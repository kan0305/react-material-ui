import { Box, Divider, Grid, Stack } from "@mui/material";
import React from "react";

const linlStyle = {
    bgcolor: "primary.main",
    color: "white",
    width: "120px",
    height: "120px",
    p: 1,
    m: 1,
    "&:hover": {
        bgcolor: "primary.light",
        cursor: "pointer",
    },
};

export const MuiLayout = () => {
    return (
        <>
            <Stack
                sx={{
                    border: "1px solid black",
                }}
                direction={"row"}
                divider={<Divider orientation="vertical" variant="middle" flexItem />}
            >
                <Box sx={linlStyle}>TypoGraphy</Box>
                <Box sx={linlStyle}>Buttons</Box>
            </Stack>
            <Grid container my={2} spacing={2}>
                <Grid item xs={12} md={4}>
                    <Box bgcolor={"primary.light"} p={2} border={"1px solid #000"}>
                        Item1
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box bgcolor={"primary.light"} p={2} border={"1px solid #000"}>
                        Item2
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box bgcolor={"primary.light"} p={2} border={"1px solid #000"}>
                        Item3
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box bgcolor={"primary.light"} p={2} border={"1px solid #000"}>
                        Item1
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box bgcolor={"primary.light"} p={2} border={"1px solid #000"}>
                        Item2
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box bgcolor={"primary.light"} p={2} border={"1px solid #000"}>
                        Item3
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
