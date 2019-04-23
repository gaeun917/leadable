import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './Styles.scss'

export default class Slider extends Component {
    // constructor
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {onSliderChangeHandler} = this.props;
        onSliderChangeHandler(e);
    }

    render() {
        const {min,
            max,
            name,
            range,
            label,
            value,
            prepend,
            append} = this.props;

        return (
            <div className='slider'>
                <label className="f4 mt0">{label} <b className="fw7 pl1">{`${prepend} ${value} ${append}`}</b></label>
                <input className='slider-input'
                       id={name}
                       type="range"
                       name={name}
                       min={min}
                       max={max}
                       step={range}
                       onChange={this.handleChange}
                />
            </div>
        )
    }
}

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    range: PropTypes.number,
    prepend: PropTypes.string,
    append: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number,
    onSliderChangeHandler: PropTypes.func.isRequired
};
Slider.defaultProps = {
    range: 0,
    prepend: '',
    append: ''
};