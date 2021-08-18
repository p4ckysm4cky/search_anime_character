import React from "react"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import { useState } from "react"

function AnimeCharacter(props) {

  const [expanded, setExpanded] = useState(false);

  console.log(props.character)
  console.log(props.character.name.full)
  console.log(props.character.age)
  console.log(props.character.image.large)
  console.log(props.character.description)


  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
    style={{maxWidth:230}}
    >
      <CardMedia
        style={{height: 345, maxWidth: 230, margin:"auto"}}
        image={props.character.image.large}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {props.character.name.full}
        </Typography>

        <Typography variant="subtitle1">
          {props.character.gender}
        </Typography>

        <Typography variant="subtitle2">
          {props.character.age?`Age: ${props.character.age}`:""}
        </Typography>
      </CardContent>

      <CardActions
        style={{display:"flex"}}
      >
        <IconButton
          style={{marginLeft:"auto"}}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color="textSecondary">
            {props.character.description}
          </Typography>
        </CardContent>
      </Collapse>



    </Card>
  )
}


export default AnimeCharacter