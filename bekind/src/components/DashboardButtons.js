import * as React from 'react';
import Button from '@mui/material/Button';

const DashboardButtons = () => {
  return (
    <div>
        <div>
            <Button variant="contained">
                Log Out
            </Button>
        </div>
        
        <div>
            <Button variant="contained">
                Add Friend
            </Button>
        </div>
    </div>
  );
}

export default DashboardButtons;
