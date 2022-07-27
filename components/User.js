import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const User = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="flex items-center">
      <Tooltip title="Dropbar">
        <Button onClick={handleOpenUserMenu} className="normal-case">
          <p className="text-white font-thin text-sm normal-case">
            Nguyen Van Linh
          </p>
        </Button>
      </Tooltip>
      <Menu
        sx={{ mt: "31px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting, index) => (
          <MenuItem key={index} onClick={handleCloseUserMenu}>
            <Typography textAlign="left">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default User;
