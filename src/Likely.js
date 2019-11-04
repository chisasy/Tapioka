import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default class Likely extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        };
    }

    like = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <Fab color="secondary" aria-label="edit" className={useStyles.fab} size="small" onClick={this.like}>
                    <FavoriteIcon />
                </Fab>
                 いいね！{this.state.count}
            </div>
        );
    }
}
