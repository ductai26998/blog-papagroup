import React from "react";
import './HotTopic.scss';

class HotTopic extends React.Component {
  render() {
    return (
      <h6 className="hot-topic_sub-title">
        <div className="disk"></div>
        <span className="text">HOT TOPIC</span>
      </h6>
    );
  }
}

export default HotTopic;