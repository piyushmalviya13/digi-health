import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import doctor from '../assets/doctor.png';
import Button from '@material-ui/core/Button';
import "../css/Login.css";
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";


export default function Login() {
    const history = useHistory();
    return (
        <div className="container">
            <Paper variant="outlined">
                <br></br>
                <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={doctor} />
                    </Grid>
                    <Grid item>
                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Doctor ID" variant="outlined" />
                            <br></br>
                            <br></br>
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                        </form>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={() => { history.push("/doctorDashboard") }}>
                            Login
                        </Button>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
