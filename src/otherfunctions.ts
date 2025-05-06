import {tableBody} from "./main.ts"

//Above gets tableBody element from html as a constant variable.


export function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

//Above creates and exports a function that delays the code from running for a set amount of time.
//Below creates and exports a function that removes all of the <tr> elements from the html.

export function ClearTable() {
    const rows = tableBody!.querySelectorAll('tr');
    rows.forEach(row => row.remove());
}

//this creates a constant variable with the html element id for the submit form button
//This specifies the value of the variable as an HTML div element.o
export const submitFormButton = document.getElementById("formSubmit") as HTMLDivElement