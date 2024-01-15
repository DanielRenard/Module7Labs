import { useContext, useState } from "react";
import { useUserContext } from "../context/userContext";
import { MyThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, makeStyles } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  // const {currentUser, handleUpdateUser} = useUserContext()
  const { theme, dakMode } = useContext(MyThemeContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long.");
    } else if (userPassword === userEmail) {
      setSubmitResult("NO");
    } else {
      setSubmitResult("Successful login");
      // handleUpdateUser({ email: userEmail})
      navigate("/HomePage");
    }
  };

  // if (currentUser.email) return (
  //   <div className={darkMode ? 'dark' : 'light'}>
  //     <p>Welcome {currentUser.email}!</p>
  //     <button onClick={()=> handleUpdateUser({})}>Log Out</button>
  //   </div>
  // )
  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          vairant="outlined"
          color="secondary"
          required
          value={userEmail}
          name="userEmail"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <TextField
          label="Password"
          vairant="outlined"
          color="secondary"
          required
          value={userPassword}
          name="userPassword"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Button variant="contained">Log In</Button>
        <p>{submitResult}</p>
      </form>
    </Container>
  );
}

export default LoginForm;
