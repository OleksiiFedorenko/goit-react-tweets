export const colorBrandDark = '#471Ca9';
export const colorBrandLight = '#ebd8ff';
export const colorBrandMid = '#a384c4';

export const linkStyles = {
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontSize: '20px',
  color: colorBrandMid,

  ':hover': {
    color: colorBrandLight,
    textDecoration: 'none',
  },

  '&.active': {
    color: colorBrandLight,
    textDecoration: 'overline',
  },
};
