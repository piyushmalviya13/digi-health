import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../css/Landing.css'
import doctor from '../assets/doctor.png';
import patient from '../assets/patient.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        maxHeight: 600,
        borderRadius: 10,
    },
});

export default function Landing() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className="contain">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <h1 className="heading">Welcome to HealthyBharat</h1>
                    <br></br>
                </Grid>
                <Grid container spacing={3} justify="space-evenly">
                    <Grid item>
                        <div onClick={() => { history.push("/login") }}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="500"
                                        image={doctor}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <h1 className="heading">
                                            Doctor
                                        </h1>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={patient}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h1 className="heading">
                                        Patient
                                    </h1>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
