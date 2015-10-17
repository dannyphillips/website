import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class SplitContent extends React.Component {
  static propTypes = {
    leftPane: React.PropTypes.func,
    leftWeighted: React.PropTypes.bool,
  };

  static defaultProps = {
    leftWeighted: true,
    leftPane: () =>  null,
    rightPane: () => {
      return (
        <span>
          <img
            style={{width: '100%'}}
            src='http://formatjs.io/img/react.svg'/>
          <div style={{textAlign: 'center', paddingTop: '10px'}}>
            <p>Picture here.</p>
          </div>
        </span>
      );
    },
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      leftWeighted, leftPane, rightPane
    } = this.props;

    return (
      <Row style={{
        padding: '20px 0',
      }}
      >
        <Col xs={12} sm={12} md={leftWeighted ? 8 : 4}
          style={{
            display: 'flex', alignItems: 'center', height: '100%'
          }}
        >
          {leftPane()}
        </Col>
        <Col xs={12} sm={12} md={leftWeighted ? 4 : 8} style={{maxHeight: '400px'}}>
          {rightPane()}
        </Col>
      </Row>
    );
  }
}
