import React, { Component } from 'react'
import Likely from './Likely'

export default class Tapioka extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            count: props.count,
            flag: false
        };
    }

    click = () => {
        this.setState({
            count: this.state.count + 1,
            flag: !this.state.flag
        })
        console.log(this.state.flag);
    }


    render() {

        return (
            <div>
                {this.state.flag === true ?
                    <div>Name: {this.props.Name}
                        <br />
                        Topping: {this.props.Topping}
                    </div>
                    :
                    null
                }
                <img src={this.props.img} onClick={this.click}></img>               
                <Likely count={this.props.count}>美味しかったら画像を押してください :</Likely>
            </div>
        );

    }
}