import React from "react"
import {useQuery, gql} from "@apollo/client"

const satania = gql`
  query {
    Page(page:0, perPage: 10) {
      characters(search: "Satania") {
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

function AnimeCharacter() {
    const {loading, error, data} = useQuery(satania)
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

export default AnimeCharacter