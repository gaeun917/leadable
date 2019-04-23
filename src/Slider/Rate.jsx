import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Slider from "./Slider";

export default class Rate extends Component {
    // constructor
    constructor(props) {
        super(props)
    }

    render() {
        const {label,prepend,value,append} = this.props;
        return (
            <div className="rate">
                <div>{`${prepend} ${value} ${append}`}</div>
                <label className="">{label}</label>
            </div>
        )
    }
}
Rate.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    prepend: PropTypes.string,
    append: PropTypes.string,
};
Rate.defaultProps = {
    range: 0,
    prepend: '',
    append: ''
};