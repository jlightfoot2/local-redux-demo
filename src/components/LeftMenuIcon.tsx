import * as React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  return (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem containerElement={<Link to="/" />} primaryText="Home" />
      <MenuItem containerElement={<Link to="/dashboard" />} primaryText="Dashboard" />
      <MenuItem containerElement={<Link to="/products" />} primaryText="Catalog" />
    </IconMenu>
    );
}


export default LeftMenu;