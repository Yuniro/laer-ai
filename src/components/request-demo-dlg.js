import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import HubspotForm from 'react-hubspot-form';

export const RequestDemoDialog = ({ title, btnTitle, open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="sm"
    fullWidth
    sx={{ '& .MuiPaper-root': { bgcolor: '#ffffff' } }}
  >
    <DialogTitle
      sx={{
        color: (theme) => theme.palette.blue['700'],
        fontWeight: 600,
        fontFamily: `'Poppins', sans-serif`,
        fontSize: { xs: '18px', lg: '20px' }
      }}
    >
      {title}
    </DialogTitle>
    <DialogContent>
      <HubspotForm
        portalId="21510347"
        formId="8d4dd751-95f8-4e27-8943-c6a6b27ab49a"
        region="na1"
        loading={<div>Loading...</div>}
        locale="en"
        translations={{
          en: { submitText: btnTitle ?? title }
        }}
      />
    </DialogContent>
  </Dialog>
);
