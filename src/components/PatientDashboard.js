import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import doctor from '../assets/doctor.png';
import '../css/DoctorDashboard.css'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#9F9D9D',
        }
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 300,
    },
    drawerPaper: {
        background: "#343741",
        color: "#FFFFFF",
        textAlign: "center",
        marginLeft: 130,
        marginRight: 130,
        padding: 1,
        borderRadius: 10,
    },
}));

export default function PatientDashboard() {
    const history = useHistory();
    const classes = useStyles();
    const data = [
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
        {
            name: "ID: #ABCDERTI12131",
            date: "December 18 2020 at 2:00 PM"
        },
    ]

    return (
        <div className="contain">
            <Paper variant="outlined">
                <br />
                <br />
                <Grid container spacing={5} justify="space-around">
                    <Grid item xs={12}>
                        <Grid container direction="row" justify="space-around" alignItems="center">
                            <Grid item>
                                <h2>Piyush Malviya</h2>
                            </Grid>
                            <Grid item>
                                <h2>Unique ID: XXXXXXX111</h2>
                                <h2>Age: 20</h2>
                            </Grid>
                            <Grid item>
                                <h2>Gender: Male</h2>
                                <h2>Bleh: XXXXXX111</h2>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <h2 id="table-header">Previous Records</h2>
                        <div className={classes.root}>
                            <GridList cellHeight={60} className={classes.gridList} cols={1}>
                                {data.map((tile) => (
                                    <GridListTile cols={tile.cols || 1}>
                                        <div>
                                            <b>{tile.name}</b>
                                            <br></br>
                                            {tile.date}
                                        </div>
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <Paper className={classes.drawerPaper} onClick={() => { history.push("/newRecord") }}><h1>Add New Record</h1></Paper>
                        <br></br>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <br />
            </Paper>
        </div>
    )
}

