Carousel
=====

This element generates a carousel

## JSX

### Properties:
```
id: React.PropTypes.string.isRequired,
data: React.PropTypes.array.isRequired,
classNames: React.PropTypes.object.isRequired,
interval: React.PropTypes.number,
indicators: React.PropTypes.bool,
controls: React.PropTypes.bool
```

### Implementation
```
import Carousel1 from 'lib-alexandria/lib/carousel/carousel1';
const style = require('./style.scss');

export default class Block1 extends React.Component {

  render() {
    return (<div className={style.feature}>
      <div className={style.carouselContainer + ' container-fluid'}>
        <Carousel1 id="carousel-home-block1" classNames={style} />
      </div>
    </div>);
  }
}
```

## SCSS (style.scss)

### Properties:
todo: @alex type here whatever properties this component will accept


### Implementation

```
@import '../../../../theme/constants';
@import "~lib-alexandria/lib/carousel/carousel1/style.scss"
```

todo: @alex type here an example of how to overwrite the properties
