export class User {
  id: Number;
  firstname: String;
  lastname: String;
  email: String;
  passsword: String;
  profileImage: String;
  Role: any;
  isSubscribed: Boolean;


  constructor(id: Number, firstname: String, lastname: String, email: String, passsword: String, profileImage: String, Role: any, isSubscribed: Boolean) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.passsword = passsword;
    this.profileImage = profileImage;
    this.Role = Role;
    this.isSubscribed = isSubscribed;
  }
}
