import { RowID, RowElement } from './interface';

// Declare the types for the CRUD operations
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
