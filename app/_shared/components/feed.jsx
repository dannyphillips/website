import React from 'react';
import { Row } from 'react-bootstrap';
import SplitContent from 'components/splitContent';

export default class Feed extends React.Component {
  static propTypes = {
    data: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {data=[]} = this.props;
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {data.map((obj={}, i) => {
          if (!obj || !obj.images || !obj.caption) { return null; }
          return (
            <SplitContent
              key={i}
              leftWeighted={true}
              leftPane={() =>
                <span>
                  {obj.caption && obj.caption.text}
                </span>
              }
              rightPane={() =>
                <span>
                  <img
                    style={{maxHeight: '100%', maxWidth: '100%'}}
                    src={obj.images.standard_resolution.url}/>
                </span>
              }
            />
          );
        })}
      </div>
    );
  }
}
