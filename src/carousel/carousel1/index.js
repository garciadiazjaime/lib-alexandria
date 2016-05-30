import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import Carousel from '../base';


export default class Carousel1 extends React.Component {

  renderItems(data, classNames) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const className = index === 0 ? 'active' : '';
        const imgUrl = item.image && item.image.length ? item.image.replace('www.dropbox.com', 'dl.dropboxusercontent.com') : '/images/demo.png';
        return (<div className={'item ' + className + ' ' + (classNames.item || '')} key={index}>
          <div className={classNames.imgContainer}>
            <img src={imgUrl} alt={item.description} />
            <h3><Link to={item.url} title={item.title}>{item.title}</Link></h3>
            <h4 dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        </div>);
      });
    }
    return null;
  }

  render() {
    const { data, id, interval, classNames, indicators, controls } = this.props;
    return (<Carousel id={id} interval={interval} classNames={classNames}>
      {this.renderItems(data, classNames)}
    </Carousel>);
  }
}

Carousel1.propTypes = {
  id: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
  classNames: React.PropTypes.object.isRequired,
  interval: React.PropTypes.number,
  indicators: React.PropTypes.bool,
  controls: React.PropTypes.bool,
};
