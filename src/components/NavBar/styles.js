import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const MyButton = styled(Button)({
  background: 'transparent',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 30,
  padding: '0 30px',
});

const MyMenuItem = styled(MenuItem)({});

export { MyButton, MyMenuItem };
