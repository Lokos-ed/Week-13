import "bootstrap/dist/css/bootstrap.min.css"
import {delay} from "./otherfunctions.ts"
import {ClearTable} from "./otherfunctions.ts"
import {getP} from "./getp.ts"
import {submitFormButton} from "./otherfunctions.ts"

//Above imports all of the needed functions and variables from the other files
//Below exports the "games" type which is needed for the other functions to run.

export type games = {
  id: string
  title: string
  sold: string
}

//This exports the tableBody const variable which is needed for other functions to run.
export const tableBody = document.getElementById("tableBody")

//Above gets tableBody element from html as a constant variable.

//this runs the getP() function
getP()
//this waits for the submit form button to be clicked
submitFormButton.addEventListener("click", async (event) => {
    //this prevents the page from refreshing when clicked
    event.preventDefault()
    
    //this creates let variables with the values of the form input boxes that are specified as input elements for HTML.
    let Title = (document.getElementById("gameNameInput") as HTMLInputElement).value
    let Sold = (document.getElementById("copiesSoldInput") as HTMLInputElement).value

    //this sends the data stored in the variables declared above to the database.
    let info = {
        ["title"]: Title,
        ["sold"]: Sold

    }
    //fetches the server, post sends the data to the server.
    fetch('http://localhost:3000/games', {
        method: 'POST',
        //
        headers: {
            //this tells the server that it is being sent json
            'Content-Type': 'application/json'
        },
        //turns a table into json
        body: JSON.stringify(info)
    })
    //this clears the table

  
  
    ClearTable()
    await delay(100);
    getP()
})