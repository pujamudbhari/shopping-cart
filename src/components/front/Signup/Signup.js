import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const Signup = () => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 400,
    margin: "100px auto",
    backgroundColor: "orange",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "20px 0", backgroundColor: "rgb(134, 96, 25)" };
  const textStyle = { margin: "20px 0" };
  const h2Style = { margin: "20px 0" };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={h2Style}>Sign In</h2>
        </Grid>
        <TextField
          placeholder="Enter username"
          fullWidth
          required
          style={textStyle}
        />
        <TextField
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          style={textStyle}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
