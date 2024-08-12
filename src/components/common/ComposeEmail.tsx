// src/components/ComposeEmail.tsx

import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Tooltip,
  InputAdornment,
} from '@mui/material';
import {
  Close as CloseIcon,
  AttachFile as AttachFileIcon,
  Send as SendIcon,
  Delete as DeleteIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ComposeEmailProps {
  open: boolean;
  handleClose: () => void;
}

const ComposeEmail: React.FC<ComposeEmailProps> = ({ open, handleClose }) => {
  const [to, setTo] = useState('');
  const [cc, setCc] = useState('');
  const [bcc, setBcc] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [showCcBcc, setShowCcBcc] = useState(false);

  const handleSend = () => {
    // Implement send functionality here
    console.log({ to, cc, bcc, subject, body });
    handleClose();
  };

  const handleDiscard = () => {
    // Clear all fields
    setTo('');
    setCc('');
    setBcc('');
    setSubject('');
    setBody('');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        New Message
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 2 }}>
        <TextField
          label="To"
          fullWidth
          variant="standard"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Add Cc & Bcc">
                  <IconButton onClick={() => setShowCcBcc(!showCcBcc)}>
                    <ArrowDropDownIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
        {showCcBcc && (
          <>
            <TextField
              label="Cc"
              fullWidth
              variant="standard"
              value={cc}
              onChange={(e) => setCc(e.target.value)}
              sx={{ mt: 1 }}
            />
            <TextField
              label="Bcc"
              fullWidth
              variant="standard"
              value={bcc}
              onChange={(e) => setBcc(e.target.value)}
              sx={{ mt: 1 }}
            />
          </>
        )}
        <TextField
          label="Subject"
          fullWidth
          variant="standard"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          sx={{ mt: 1 }}
        />
        <Box sx={{ mt: 2 }}>
          <ReactQuill value={body} onChange={setBody} />
        </Box>
      </DialogContent>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 1,
          pl: 2,
          pr: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          onClick={handleSend}
        >
          Send
        </Button>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton onClick={handleDiscard}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Dialog>
  );
};

export default ComposeEmail;
