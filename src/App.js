import React from "react"
import AnimeCharacter from "./components/AnimeCharacter"
import Typography from "@material-ui/core/Typography" // for text
import Container from "@material-ui/core/Container" // Margins in page
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField" // User input boxes
import { makeStyles } from "@material-ui/core" // Allows change of css in materialui
import { useState } from "react"





function App() {
  const useStyles = makeStyles({
    input: {
      marginBottom: 20
    }
  })
  const classes = useStyles()

  const [charName, setCharName] = useState("")
  const [errorCharName, setErrorCharName] = useState(false)

  const handleChange = event => {
    event.preventDefault()
    setErrorCharName(false)
    if (charName == "") {
      setErrorCharName(true)
    } else {
      // This statement tells it to query anilist
      console.log(charName)
    }
  }
  

  return(
    <Container>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        color="primary"
        gutterBottom="true"
      >
        Search Anime Character
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleChange}>
        <TextField 
          onChange={(e) => setCharName(e.target.value)}
          variant="outlined"
          label="Anime Character"
          fullWidth
          value={charName}
          className={classes.input}
          error={errorCharName}
        />

        <Button
        type="submit"
        variant="contained"
        color="primary"
        >
          Submit
        </Button>
      </form>
    </Container>
    
  )
}
export default App;
