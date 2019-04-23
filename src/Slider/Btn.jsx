import React from 'react'
import PropTypes from 'prop-types';
import Rate from "./Rate";

export default class Btn extends React.Component {
    // constructor
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { value } = this.props;
        this.setState({ value: value[e.target.value]})
    }

    render() {
        const {value,label} = this.props;

        return (
            <button>{label}</button>
        )
    }
}
Btn.propTypes = {
    label: PropTypes.string,
};

