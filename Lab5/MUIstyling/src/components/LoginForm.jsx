import { useContext, useState } from "react";
// import { MyThemeContext } from "../context/ThemeContext";
import { useUserContext } from "../context/userContext";
// import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, makeStyles } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  const {currentUser, handleUpdateUser} = useUserContext()
  // const { theme, dakMode } = useContext(MyThemeContext);

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long.");
    } else if (userPassword === userEmail) {
      setSubmitResult("NO");
    } else {
      setSubmitResult("Successful login");
      handleUpdateUser({ email: userEmail})
      navigate("/HomePage");
    }
  };

  if (currentUser.email) return (
    <div className={darkMode ? 'dark' : 'light'}>
      <p>Welcome {currentUser.email}!</p>
      <Button onClick={()=> handleUpdateUser({})}>Log Out</Button>
    </div>
  )
  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          vairant="outlined"
          color="secondary"
          required
          type="email"
          value={userEmail}
          name="userEmail"
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <TextField
          label="Password"
          vairant="outlined"
          color="secondary"
          required
          type="password"
          value={userPassword}
          name="userPassword"
          onChange={(e) => setUserPassword(e.target.value)}
        />

        {
          // showButton ? <button disabled={!showButton}>Log In</button> : null
        }
        <Button variant="contained">Log In</Button>
        <p>{submitResult}</p>
      </form>
    </Container>
  );
}

export default LoginForm;
