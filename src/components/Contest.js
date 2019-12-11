import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {

    render() {
        const {description} = this.props;

        return (
            <div className="Contest">
                <div className="Contest">
                    {description}
                </div>
                <div className="home-link link" onClick={this.props.contestListClick}>
                    Contest List
                </div>
            </div>
        )
    }
}

Contest.propTypes={
    description: PropTypes.string.isRequired,
    contestListClick:PropTypes.func. isRequired
};

export default Contest;
