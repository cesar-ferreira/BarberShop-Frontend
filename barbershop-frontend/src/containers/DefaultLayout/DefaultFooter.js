import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

            <div className="row">
                <div className="col-md-1">
                  <a href="https://github.com/cesar-ferreira">
                      <i className="fa fa-instagram fa-lg mt-4"></i>
                  </a>
                </div>
                <div className="col-md-1">
                   <a href="https://github.com/cesar-ferreira">
                       <i className="fa fa-facebook-square fa-lg mt-4"></i>
                   </a>
                </div>
                <div className="col-md-1">
                   <a href="https://github.com/cesar-ferreira">
                       <i className="fa fa-twitter-square fa-lg mt-4"></i>
                   </a>
                </div>
            </div>
          </span>
        <span className="ml-auto">Powered by <a href="https://github.com/cesar-ferreira">César Ferreira</a> &copy; 2018.</span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
