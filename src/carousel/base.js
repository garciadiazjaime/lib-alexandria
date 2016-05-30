import React from 'react';
import _ from 'lodash';
import SVG from '../svg';

export default class Carousel extends React.Component {

  getIndicators(sliderId, isVisible, data, style) {
    let indicators = [];
    const classNames = style || {};
    if (isVisible !== false && _.isArray(data) && data.length) {
      const activeClassName = classNames && classNames.active ? 'active ' + classNames.active : 'active';
      indicators = data.map((item, index) => {
        const className = index === 0 ? activeClassName : '';
        return (<li data-target={'#' + sliderId} data-slide-to={index} className={className} key={index} />);
      });
      return (<ol className={'carousel-indicators ' + (classNames.base || '')}>
        {indicators}
      </ol>);
    }
    return null;
  }

  getControls(sliderId, isVisible, classNames) {
    const { base, prev, next, arrow } = classNames;
    if (isVisible !== false) {
      return (<div className="carousel-controls">
          <a className={'left carousel-control ' + (base || '') + ' ' + (prev || '')} href={'#' + sliderId} role="button" data-slide="prev">
          <SVG network="carousel_left" className={arrow}/>
          <span className="sr-only">Previous</span>
        </a>
        <a className={'right carousel-control ' + (base || '') + ' ' + (next || '')} href={'#' + sliderId} role="button" data-slide="next">
          <SVG network="carousel_right" className={arrow}/>
          <span className="sr-only">Next</span>
        </a>
      </div>);
    }
    return null;
  }

  render() {
    const { id, interval, children, indicators, controls, classNames } = this.props;
    return (<div id={id} className="carousel slide" data-ride="carousel" data-interval={interval || 8000}>
      { this.getIndicators(id, indicators, children, classNames.indicator) }
      <div className={'carousel-inner ' + (classNames.inner || '')} role="listbox">
      {children}
      </div>
      { this.getControls(id, controls, classNames.controls) }
    </div>);
  }
}

Carousel.propTypes = {
  id: React.PropTypes.string.isRequired,
  interval: React.PropTypes.number,
  children: React.PropTypes.any,
  indicators: React.PropTypes.bool,
  controls: React.PropTypes.bool,
  classNames: React.PropTypes.object,
};
