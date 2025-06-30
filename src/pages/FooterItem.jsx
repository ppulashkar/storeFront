import React from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';
 
const FooterItem = ({ title, value, avatarUrl }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {avatarUrl && <Avatar src={avatarUrl} sx={{ width: 32, height: 32 }} />}
      <Box>
        <Typography variant="body2" sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#85BD25' }}>
          {value}
        </Typography>
      </Box>
    </Stack>
  );
};
 
export default FooterItem;