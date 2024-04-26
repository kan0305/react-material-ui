import { Box, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup, FormHelperText } from "@mui/material";
import React, { useState } from "react";

export const MuiRadioButton = () => {
    const [value, setValue] = useState("");

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box>
            <FormControl error>
                <FormLabel id="demo-job-experience-group-label">Years of experience</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-job-experience-group-label"
                    name="job-experience-group"
                    value={value}
                    onChange={handleRadioChange}
                    row
                >
                    <FormControlLabel value="0-2" control={<Radio />} label="0-2" />
                    <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
                    <FormControlLabel value="6-above" control={<Radio />} label="6-above" />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    );
};
