import React, { useState } from "react";
import { Box, TextField, MenuItem, Stack } from "@mui/material";

export const MuiSelect = () => {
    const [country, setCountry] = useState("");

    const handleContryChange = (event) => {
        setCountry(event.target.value);
    };

    const [countries, setCountries] = useState([]);

    const handleContriesChange = (event) => {
        let value = event.target.value;
        setCountries(typeof value === "string" ? value.split(",") : value);
    }

    return (
        <Stack spacing={2} direction="row">
            <Box width="250px">
                <TextField select fullWidth label="Select Country" value={country} onChange={handleContryChange}>
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="US">USA</MenuItem>
                    <MenuItem value="AU">Austraila</MenuItem>
                </TextField>
            </Box>

            <Box width="250px">
                <TextField
                    select
                    fullWidth
                    label="Select Country"
                    value={countries}
                    onChange={handleContriesChange}
                    inputProps={{ multiple: true }}
                >
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="US">USA</MenuItem>
                    <MenuItem value="AU">Austraila</MenuItem>
                </TextField>
            </Box>
        </Stack>
    );
};
