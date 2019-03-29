import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';

const Block = styled.div`
  padding: 1rem 1rem 1rem 1rem;
`

class MediumNotice extends React.Component {
  render() {
    return (
      <Block>
        <h1>WP Stasis</h1>
      </Block>
    );
  }
}

ReactDOM.render(<MediumNotice source="react-demo" />, document.querySelector('#wp-stasis-admin-container'));