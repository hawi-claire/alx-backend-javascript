/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row element
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and get a new ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row with ID: ${newRowID}`);

// Update the row with an age
const updatedRow: RowElement = { 
  ...row,
  age: 23 
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row with ID: ${newRowID}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Deleted row with ID: ${newRowID}`);
