const multiSelectCol = {
  checkboxSelection: true,
  width: 40
}
const idCol = {
  headerName: 'id',
  field: '_id',
  width: 40,
};
const titleCol = {
  headerName: 'Title',
  field: 'title',
  sortable: true,
  width: 300,
  resizable: true,
};
const assignedUserCol = {
  headerName: 'User',
  field: 'assignedUser',
  sortable: true,
  width: 150,
  resizable: true
};
const dateCol = { headerName: 'Created on', field: 'date', sortable: true };
const labelCol = { headerName: 'Labels', field: 'label', sortable: true };

export default [multiSelectCol, idCol, titleCol, assignedUserCol, dateCol, labelCol];
