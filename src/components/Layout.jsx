import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
    return (
        <Container maxWidth="xl">
            <Grid container my={2}>
                <Grid item xs={12} md={3}>
                    <Navbar />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        {children}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
