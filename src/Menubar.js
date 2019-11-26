import React from 'react';
import './index.css';
import Grid from './Grid';

export default class Menubar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(

        <Grid flag={this.props.flag} click={this.props.click} menu="メニュー" storeName="店舗" site="サイト"></Grid>
        );

    }
}