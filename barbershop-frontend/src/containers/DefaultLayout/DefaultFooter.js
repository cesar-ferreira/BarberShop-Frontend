import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

      return (
      <React.Fragment>
          <span>
              <a href="https://github.com/cesar-ferreira">
                <Button size="sm" className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-facebook"></i></Button>
              </a>
              <a href="https://github.com/cesar-ferreira">
                <Button size="sm" className="btn-twitter btn-brand icon mr-1 mb-1"><i className="fa fa-twitter"></i></Button>
              </a>
              <a href="https://github.com/cesar-ferreira">
                <Button size="sm" className="btn-instagram btn-brand icon mr-1 mb-1"><i className="fa fa-instagram"></i></Button>
              </a>
          </span>
        <span className="ml-auto">Powered by <a href="https://github.com/cesar-ferreira">César Ferreira</a> &copy; 2018.</span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;



