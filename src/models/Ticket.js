export default class Ticket {
  _id;
  title;
  description;
  assignedUser;
  date;
  label;

  constructor(id, title, description, assignedUser, date, label) {
    this._id = id;
    this.title = title;
    this.description = description;
    this.assignedUser = assignedUser;
    this.date = date;
    this.label = label;
  }
}
