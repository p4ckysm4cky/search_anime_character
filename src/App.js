import React from "react"
import AnimeCharacter from "./components/AnimeCharacter"
import Typography from "@material-ui/core/Typography" // for text
import Container from "@material-ui/core/Container" // Margins in page
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField" // User input boxes
import { makeStyles } from "@material-ui/core" // Allows change of css in materialui
import { useState } from "react"
import {useQuery, gql} from "@apollo/client"





function App() {
  const useStyles = makeStyles({
    input: {
      marginBottom: 20
    }
  })
  const classes = useStyles()

  const [charName, setCharName] = useState("")
  const [errorCharName, setErrorCharName] = useState(false)
  const [displayStuff, setDisplayStuff ] = useState(false)
  const charQuery = gql`
    query {
      Page(page:0, perPage: 10) {
        characters(search: "${charName}") {
          name {
            full
          }
          gender
          age
          image {
            large
            medium
          }
          description
          
        }
      }
    }
  `


  const handleChange = event => {
    event.preventDefault()
    setErrorCharName(false)
    if (charName == "") {
      setErrorCharName(true)
    } else {
      // This statement tells it to query anilist
      console.log(charName)
      setDisplayStuff(true)
    }
  }
  function DisplayCharName() {
    const {loading, error, data} = useQuery(charQuery)
    if (loading) return <p>Loading ...</p>
    if (error) return <p>An Error has occurred</p>
    return (
      <div>
        {/* <form>
          <h1>Anime Characters</h1>
          <input type="text"></input>
  
        </form> */}
        {data.Page.characters.map((character, id) => {
          return (
            <p key={id}>
              {character.name.full}
            </p>     
        )})}
  
      </div>
    );
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
      {displayStuff?<DisplayCharName/>:<p></p>}
    </Container>
    
  )
}
export default App;
