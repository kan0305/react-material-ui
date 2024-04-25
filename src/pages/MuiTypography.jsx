import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
    return (
        <div>
            {/* 標題 */}
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4">h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>
            <Typography variant="h6" component="h1" gutterBottom>h6 Heading with h1 component</Typography>

            {/* 副標題 */}
            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle2</Typography>

            {/* 文字 */}
            <Typography variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem libero tenetur corporis culpa cupiditate eveniet? Quis, quas ut incidunt aut, delectus aperiam porro veniam alias omnis placeat, commodi aliquam optio.
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus harum aut deserunt consequatur quidem necessitatibus ex dolorem corrupti quos quaerat repellat excepturi mollitia recusandae obcaecati id, error pariatur neque ad!
            </Typography>
        </div>
    )
}
