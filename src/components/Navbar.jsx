import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "#f8fafb" }}>
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={"/"}>
                            <ListItemText primary="TypoGraphy" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={"/buttons"}>
                            <ListItemText primary="Buttons" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={"/layouts"}>
                            <ListItemText primary="Layouts" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={"/cards"}>
                            <ListItemText primary="cards" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={"/textfield"}>
                            <ListItemText primary="textfield" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={"/select"}>
                            <ListItemText primary="select" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={"/radioButton"}>
                            <ListItemText primary="radioButton" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={"/muiForm"}>
                            <ListItemText primary="muiForm" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};
