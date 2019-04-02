import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/Store';
import './index.css';
import Grid from '@material-ui/core/Grid';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import App from './mobx/App';


//React Redux <Provider />, makes the Redux store available to the rest of app


ReactDOM.render(
     <Grid
          container
          spacing={10}
          alignItems='center'
          direction='column'
          justify='center'
          >
               <Paper elevation={0} style={{width:'40%'}}>
                    <AppBar  position="static" style={{ height: 64, color:'#4285f4' }}>
                         <Toolbar style={{ height: 50 }}>
                         <Typography variant="h6" style={{color:'white' }}>New Joiner </Typography><Typography variant="h6" style={{color:'#fbbc05' }}> &nbsp; TODO &nbsp;</Typography><Typography variant="h6" style={{color:'white' }}> APP </Typography>
                         </Toolbar>
                    </AppBar>
                    <Provider store={store}>
                          <App />
                    </Provider>
               </Paper>
          </Grid>,
          document.getElementById('root')
            );



// For other state cotainers like Hooks, Mobx and React State, uncomment below statement

/*
ReactDOM.render(
     <Grid
          container
          spacing={10}
          alignItems='center'
          direction='column'
          justify='center'
          >
               <Paper elevation={0} style={{width:'40%'}}>
                    <AppBar  position="static" style={{ height: 64, color:'#4285f4' }}>
                         <Toolbar style={{ height: 50 }}>
                         <Typography variant="h6" style={{color:'white' }}>New Joiner </Typography><Typography variant="h6" style={{color:'#fbbc05' }}> &nbsp; TODO &nbsp;</Typography><Typography variant="h6" style={{color:'white' }}> APP </Typography>
                         </Toolbar>
                    </AppBar>
                          <App />
               </Paper>
          </Grid>,
          document.getElementById('root')
            );

*/

           