import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

export const MuiTextField = () => {
    const [value, setValue] = useState("");
    
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="standard" />
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField label="Small secondary" size="small" color="secondary" />
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField
                    label="Form Input"
                    size="small"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    error={!value}
                    helperText={!value ? "Enter your name" : ""}
                />
                <TextField label="Form Input" size="small" required />
                <TextField label="Form Input" size="small" required helperText="Enter your name" />
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField
                    label="Amount"
                    type="number"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField
                    label="Weight"
                    type="number"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    }}
                />
            </Stack>
        </Stack>
    );
};
