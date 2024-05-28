import { useCallback, useState } from 'react';
import './content.css';
import { Button, Snackbar } from '@mui/material';
import { Link } from '@mui/material';

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
        <ol className='steps'>
          <li>
            Buy Trump Cash
            <ol>
              <li>
                Copy the token address by clicking on the address below.
                <Button
                  color='primary'
                  sx={{
                    fontSize: '1em',
                    cursor: 'copy',
                    userSelect: 'text',
                  }}
                  onClick={handleClick}
                >
                  0x5456F6f2E9Cb1CFb939B787aAE729C020C82aF1B
                </Button>
              </li>
              <li>
                Visit{' '}
                <Link target='_blank' href='https://app.thruster.io/'>
                  Thruster
                </Link>{' '}
                and paste the token address.
              </li>
            </ol>
          </li>
          <li>
            Add Trump Cash to your{' '}
            <Link
              target='_blank'
              href='https://blast.io/en/airdrop?tab=GoldJackpot'
            >
              Blast Jackpot
            </Link>{' '}
            deck.
          </li>
          <li>
            Tell your friends, vibe with the community, and help Trump get
            elected.
          </li>
          <li>Win the Blast Jackpot.</li>
          <li>Donate to the Trump campaign.</li>
        </ol>
      </div>
      <div className='content-row'>
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
