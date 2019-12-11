import React from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  handleClick = () => {
    const {id} = this.props;

    this.props.onClick(id);
  }

  render() {
    const {categoryName, contestName} = this.props;

    return (
      <div className="ContestPreview" onClick={this.handleClick} style={{cursor: 'pointer'}}>
        <div className="category-name">{categoryName}</div>
        <div className="contest-name">{contestName}</div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default ContestPreview;
