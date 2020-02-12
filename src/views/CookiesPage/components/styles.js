import {container, title} from 'assets/jss/material-kit-react';

const styles = theme => ({
  container,
  brand: {
    color: '#FFFFFF',
    textAlign: 'left',
  },
  title: {
    ...title,
    fontSize: '2.8rem',
    fontWeight: '500',
    display: 'inline-block',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0 0',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  mainRaised: {
    margin: '-2rem 0.5rem 0',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  link: {
    textDecoration: 'none',
  },
  textCenter: {
    paddingTop: '6rem',
    color: '#999',
    textAlign: 'center',
    marginBottom: '2rem',
    [theme.breakpoints.down(381)]: {
      paddingTop: '10rem',
    },
  },
});

// 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default styles;
