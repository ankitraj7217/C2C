import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const Header = () => {

    const StyledAppBar = styled(AppBar)({
        background: 'linear-gradient(45deg, #2196F3 30%, #03A9F4 90%)',
    });

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'center',
    });


    return (
        <div className="c2c-header">
            <StyledAppBar position="static">
                <StyledToolbar>
                    <Typography variant="h6">Welcome to C2C</Typography>
                </StyledToolbar>
            </StyledAppBar>
        </div>
    )
}

export default Header;