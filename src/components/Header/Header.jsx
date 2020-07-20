import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

import headerStyles from './header.module.scss';

const Header = () => {
  return (
    <header className={`header header-top-transparent ${headerStyles.header}`}>
      HEADER
    </header>
  );
};

Header.propTypes = {

};
Header.defaultProps = {

};

export default Header;
