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

var surnames = ['rossi' , 'ferilli' , 'bianchi' , 'leva' , 'esterni'];
// console.log(surnames);

// ASKING THE USER TO WRITE HIS SURNAME

var userSurname = prompt('Please enter your Surname here:').toLowerCase().trim();
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

// CREATING VARIABLE TO USE TO GENERATE AN OUTPUT ON HTML

var item = '';

// LOOP TO CREATING LI FOR THE UL IN HTML

for( var i = 0; i < surnames.length; i++) {
    item += '<li>' + surnames[i] + '</li>';
}

// OUTPUT IN HTML OF THE LIST
document.getElementById('surnames-list').innerHTML = item;
// OUTPUT IN HTML OF THE "HUMAN" INDEX OF USER'S SURNAME
document.getElementById('human-index').innerHTML = 'User\'s Index in the List is: ' + humanIndex;