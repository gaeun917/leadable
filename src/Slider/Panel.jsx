import React from 'react'
import Slider from "./Slider";
import Rate from "./Rate";
import Button from "./Btn";
import './Styles.scss'

export default class Panel extends React.Component {
    // constructor
    constructor(props) {
        super(props)
        this.state = {
            amount: 100000,
            annual: 12,
            interest: 5,
            repayment: 0
        }
    }

    componentDidMount() {
        this.calInterestPayment();
    }

    onSliderChangeHandler = (e) => {
        if (e.target.name === 'amount') {
            this.setState({amount: parseInt(e.target.value)}, this.calInterestPayment)
        }
        if (e.target.name === 'annual') {
            this.setState({annual: parseInt(e.target.value)}, this.calInterestPayment)
        }
    }

    calInterestPayment = () => {
        const {amount, annual} = this.state;

        console.log('')

        let interest;
        if (amount >= 100000 && amount < 500000) {
            interest = 5
        } else if (amount >= 500000 && amount < 1000000) {
            interest = 10
        } else if (amount >= 1000000 && amount < 1500000) {
            interest = 15
        } else if (amount >= 1500000 && amount <= 2000000) {
            interest = 20
        }
        console.log('interest', interest)

        const interestAmount = amount * (interest / 100);
        console.log('interestAmount', interestAmount)

        const totalAmount = amount + interestAmount;
        console.log('totalAmount', totalAmount)

        const repayment = (totalAmount / annual).toFixed(0);
        console.log('repayment', repayment);


        this.setState({
            repayment: repayment,
            interest: interest
        })
    }

    render() {
        const {amount, annual, interest, repayment} = this.state;

        return (
            <div className='panel'>
                <Slider min={100000}
                        max={2000000}
                        name='amount'
                        value={amount}
                        label={`I want to borrow`}
                        range={100000}
                        prepend={`£`}
                        onSliderChangeHandler={this.onSliderChangeHandler}/>
                <Slider min={12}
                        max={60}
                        name='annual'
                        value={Math.floor(annual / 12)}
                        label={`over`}
                        append={'years'}
                        onSliderChangeHandler={this.onSliderChangeHandler}
                />
                <div className='rateSection'>
                    <Rate label={`Yearly Interest rate`}
                          value={interest}
                          append={'%'}
                    />
                    <Rate label={`Monthly repayment`}
                          value={repayment}
                          prepend={`£`}
                    />
                </div>
                <Button label={`Get your quote`}/>
            </div>
        )
    }

}

