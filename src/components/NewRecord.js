import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import "../css/NewRecord.css";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

export default function NewRecord() {
    const [currentMedicine, setCurrentMedicine] = useState([""]);
    const [currentProblem, setCurrentProblem] = useState([""]);
    const [medicine, setMedicine] = useState([]);
    const [problem, setProblem] = useState([]);
    return (
        <div className="contain">
            <Paper variant="outlined">
                <Grid
                    container
                    direction="column"
                    justify="space-around"
                    //alignItems="center"
                    spacing={3}
                >
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
                    <Grid item xs={12}>
                        <Grid container direction="row" justify="space-around" alignItems="center">
                            <Grid item>
                                <div>
                                    {problem.map(item => {
                                        return <div><Chip label={item} color="primary" /></div>
                                    })}
                                </div>
                                <br></br>
                                <form noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Add Problem" variant="outlined" value={currentProblem} onChange={(e) => { setCurrentProblem(e.target.value); }} style={{ width: '50ch' }} />
                                    &nbsp;
                                    &nbsp;
                                    <Button variant="contained" color="primary" onClick={() => { setProblem(problem => [...problem, `${currentProblem}`]); setCurrentProblem(""); }}>
                                        Add
                                    </Button>
                                </form>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container direction="row" justify="space-around" alignItems="center">
                            <Grid item>
                                <div>
                                    {medicine.map(item => {
                                        return <Chip label={item} color="primary" />
                                    })}
                                </div>
                                <Grid item>
                                    <form noValidate autoComplete="off">
                                        <TextField id="outlined-basic" label="Add Medicine" value={currentMedicine} onChange={(e) => { setCurrentMedicine(e.target.value); }} variant="outlined" style={{ width: '50ch' }} />
                                        &nbsp;
                                        &nbsp;
                                        <Button variant="contained" color="primary" onClick={() => { setMedicine(medicine => [...medicine, `${currentMedicine}`]); setCurrentMedicine(""); }}>
                                            Add
                                        </Button>
                                    </form>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justify="space-around" alignItems="center">
                            <Button variant="contained" color="primary" /*onClick={() => { history.push("/patientDashboard") }}*/>
                                Add Record
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
