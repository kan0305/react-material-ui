import React from "react";
import { Box, Card, CardContent, Typography, CardActions, CardMedia, Button } from "@mui/material";

export const MuiCard = () => {
    return (
        <Box width={300}>
            <Card>
                <CardMedia component="img" height="140" image="https://source.unsplash.com/random" alt="unsplash image" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        React
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora animi aperiam culpa exercitationem! Totam deserunt
                        nihil ratione dolorum iure enim!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    );
};
