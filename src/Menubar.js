import React from 'react';
import './index.css';
import Grid from './Grid';

export default class Menubar extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(

        <Grid menu="メニュー" storeName="店舗" site="サイト"></Grid>
        );

    }
}