import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({contests, onContestClick}) => (
    <div className ="constestList">
        {Object.keys(contests).map((contestId) =>
              <ContestPreview {...contests[contestId]} key={contestId} onClick={onContestClick}/>
            )}
    </div>
);

ContestList.propTypes ={
    contests: PropTypes.instanceOf(Object),
    onContestClick: PropTypes.func.isRequired
};

export default ContestList;