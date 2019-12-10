
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import axios from 'axios';
import ContestPreview from './ContestPreview';


class App extends React.Component {
    state = {
      pageHeader: 'Naming Contests',
      contests: []
    };
    componentDidMount() {
      axios.get('api/contests')
        .then(resp =>{
            this.setState({
                contests: resp.data.contests
            });
        })
        .catch(console.error)
    }   
    componentWillUnmount() {
      // clean timers, listeners
    }
    render() {
      return (
        <div className="App">
          <Header message={this.state.pageHeader} />
          <div>
            {this.state.contests.map((contest,i) =>
              <ContestPreview {...contest} key={i}/>
            )}
          </div>
        </div>
      );
    }
  }


App.propTypes = {
    helloMessage: PropTypes.string.isRequired,
    contests: PropTypes.instanceOf(Array)
};

App.defaultProps = {
    helloMessage: 'Hello'
};

export default App;