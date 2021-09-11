import React from "react";
import './HotTopic.scss';

class HotTopic extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <h7 className="hot-topic_sub-title">
        <div className="disk"></div>
        <span className="text">HOT TOPIC</span>
      </h7>
    );
  }
}

export default HotTopic;