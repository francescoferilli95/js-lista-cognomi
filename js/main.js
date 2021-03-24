// console.log('Hello');

/**
 * 
 *  TASK:
 *  1. ASK THE USER FOR HIS SURNAME.
 *  2. PUT HIS SURNAME INTO AN ARRAY FILLED WITH OTHERS SURNAMES.
 *  3. OUTPUT OF THE ARRAY IN ALPHABETICAL ORDER.
 *  4. OUTPUT OF THE USER'S SURNAMES' INDEX.
 * 
/**/

// CREATING ARRAY WITH A LIST OF SURNAMES

var surnames = ['Rossi' , 'Ferilli' , 'Bianchi' , 'Leva' , 'Esterni'];
// console.log(surnames);

// ASKING THE USER TO WRITE HIS SURNAME

var userSurname = prompt('Please enter your Surname here:');
// console.log(userSurname);

// ADDING USER'S SURNAME TO THE ARRAY

surnames.push(userSurname);
console.log('Surnames before sorting: ' + surnames);

// SORTING THE ARRAY IN ALPHABETICAL ORDER

surnames.sort();
console.log('Surnames after sorting: ' + surnames);

// FINDING THE "HUMAN" INDEX OF THE USER'S SURNAME

var humanIndex = surnames.indexOf(userSurname) + 1;
console.log('User\'s Human Index: ' + humanIndex);

