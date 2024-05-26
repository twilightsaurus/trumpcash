import { useCallback, useState } from 'react';
import './content.css';
import { Button, Snackbar } from '@mui/material';

export const Content = () => {
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => {
    const textToCopy = '0x5456F6f2E9Cb1CFb939B787aAE729C020C82aF1B';

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextArea);

    // Show feedback to the user
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className='content'>
      <div className='content-row'>
        <ul className='steps'>
          <li>Step 1: Buy Trump Cash.</li>
          <li>Step 2: Add Trump Cash to your Blast Jackpot deck.</li>
          <li>
            Step 3: Tell your friends, vibe with the community, and help Trump
            get elected.
          </li>
          <li>Step 4: Win the Blast Jackpot.</li>
          <li>Step 5: Donate to the Trump campaign.</li>
        </ul>
      </div>
      <div className='content-row'>
        <Button
          color='primary'
          sx={{ fontSize: '2em', cursor: 'copy' }}
          onClick={handleClick}
          className='ca'
        >
          0x5456F6f2E9Cb1CFb939B787aAE729C020C82aF1B
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message='Contract address copied to clipboard!'
        />
      </div>
    </section>
  );
};
