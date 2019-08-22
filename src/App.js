import React from 'react';
import { TextField, Paper, Typography, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const styles = ({ spacing: { unit } }) => ({
  root: {
    margin: unit,
    padding: unit * 3,
    maxWidth: 400
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  },
  TextField: {
    marginBottom: unit * 2,
  }
})

export default withStyles(styles)(
  
  class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        name: "",
        address: "",
      }
    }
  
    handleName = e => this.setState({
      name: e.target.value
    })
  
    handleAddress = e => this.setState({
      address: e.target.value
    })
  
    render() {
  
      const { classes } = this.props;

      return (
        <Paper className={classes.root}>
          <Typography
          variant="h6"
          gutterBottom>
            Check Eligibility
          </Typography>
            <form>
              <TextField 
              onChange={this.handleName}
              placeholder="Name"
              required/>
              <TextField 
              onChange={this.handleAddress}
              placeholder="Address"
              required/>
            </form>
            <Button
            type="submit"
            color="primary"
            variant="raised">
              Submit
            </Button>
        </Paper>
      );
    }
  }
)

