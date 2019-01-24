export class ProfilePageModel{
    id : number;
    created_at : Date;
    updated_at : Date;
    email : String;
    password : String;
    userType : String;
    fullName : String;
    Phone : String;
    isVerified : Boolean;
    streetName : String;
    expert : String ;
    role : String;
    bio : String;
    artistId : number;
    cv : File;
    profilepic : File;
    samplepic : File;
}