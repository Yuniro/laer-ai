import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export const ContextMenuItem = ({ onClick, icon: Icon, text, small }) => (
  <MenuItem
    onClick={onClick}
    sx={{
      lineHeight: 1.2,
      fontSize: small ? 14 : 16,
      minWidth: 160,
      padding: small ? '12px 24px !important' : '16px 32px !important',
      margin: '0 !important'
    }}
  >
    {!!Icon && (
      <ListItemIcon>
        <Icon fontSize="small" />
      </ListItemIcon>
    )}

    <ListItemText sx={{ color: '#19191D', lineHeight: 1 }}>
      {text}
    </ListItemText>
  </MenuItem>
)

export const ContextMenu = ({ onClose, onMenu, items, anchorEl, sx = {}, horizontal = 'left' }) => (
  <Menu
    open={!!anchorEl}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal }}
    transformOrigin={{ vertical: 'top', horizontal }}
    disableScrollLock
    gap={3}
    sx={sx}
  >
    {items.map(item => (
      <ContextMenuItem
        key={item.key}
        onClick={() => onMenu(item.key)}
        icon={item.icon}
        text={item.title}
      />
    ))}
  </Menu>
)
