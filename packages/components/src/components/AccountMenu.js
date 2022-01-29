import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <React.Fragment>
      <Box
        role="account-menu"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#1f2937', height: '70px' }}
      >
        <Typography sx={{ minWidth: 100, color: '#ffffff' }}>Gedesco</Typography>
        <Typography sx={{ minWidth: 100, color: '#adccc9', fontWeight: 'bold' }}>Main Page</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>V</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
}
