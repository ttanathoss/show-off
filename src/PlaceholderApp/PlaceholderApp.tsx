import { Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';

const PlaceholderApp: FC = () => (
  <Paper>
    <Box p={1}>
      <Typography variant="h1" align="center">
        Select app from the list above and it will be shown here
      </Typography>
    </Box>
  </Paper>
);

export default PlaceholderApp;
