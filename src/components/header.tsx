import './header.css';
import { Telegram, X } from '@mui/icons-material';
import trumpcash from '../assets/trumpcash.png';
import { Link } from '@mui/material';

export const Header = () => {
  return (
    <header className='header'>
      <h1>TRUMP CASH</h1>
      <img
        src={trumpcash}
        alt='1000 Dollars Trump Bill'
        className='trump-bill'
      />
      <div className='socials'>
        <Link
          target='_blank'
          sx={{ marginRight: '1em' }}
          className='link-icon x'
          href='https://x.com/trumpcashxyz'
        >
          <X sx={{ width: '50px', height: '50px' }} color='primary' />
        </Link>
        <Link
          target='_blank'
          className='link-icon tg'
          href='https://t.me/trumpcashxyz'
        >
          <Telegram sx={{ width: '50px', height: '50px' }} color='primary' />
        </Link>
      </div>
    </header>
  );
};
