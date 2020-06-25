import React from 'react';
import { oneOf, string } from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
import MobileLogoImage from './cottagedays-logo-small.png';
// import DesktopLogoImage from './cottagedays-logo.png';
import DesktopLogoImage from './cloudsound3.svg'
import css from './Logo.css';

const Logo = props => {
  const { className, format, ...rest } = props;
  const isMobile = format !== 'desktop';
  const classes = classNames(className, { [css.logoMobile]: isMobile });
  const logoImage = isMobile ? MobileLogoImage : DesktopLogoImage;

  return (
    <img
      className={classes}
      src={logoImage}
      alt={config.siteTitle}
      {...rest}
    />
  );
};

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;

// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// // import IconLogo from './IconLogo';
// import css from './Logo.css';

// import MobileLogoImage from './cottagedays-logo-small.png';
// import DesktopLogoImage from './cottagedays-logo.png';

// const Logo = props => {
//   const { className, format, ...rest } = props;
//   const mobileClasses = classNames(css.logoMobile, className);

//   // If you want to use image instead of svg as a logo you can use the following code.
//   // Also, remember to import the image as LogoImage here.
//   // <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />

//   return (
//     <IconLogo
//       className={format === 'desktop' ? className : mobileClasses}
//       format={format}
//       {...rest}
//     />
//   );
// };

// const { oneOf, string } = PropTypes;

// Logo.defaultProps = {
//   className: null,
//   format: 'desktop',
// };

// Logo.propTypes = {
//   className: string,
//   format: oneOf(['desktop', 'mobile']),
// };

// export default Logo;
