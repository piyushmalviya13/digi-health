import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import patient from '../assets/patient.png';
import Button from '@material-ui/core/Button';
import "../css/Login.css";
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";

export default function SearchPatient() {
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
                        <Avatar alt="Remy Sharp" src={patient} />
                    </Grid>
                    <Grid item>
                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Aadhar Number" variant="outlined" />
                        </form>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={() => { history.push("/patientDashboard") }}>
                            Search
                        </Button>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
