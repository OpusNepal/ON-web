interface Profile {
    id: Number,
    created_at: String,
    updated_at: String,
    streetName: String,
    expert: String,
    bio: String,
    artistId: Number,
    CV: String,
    role: String,
    profilepic: String,
    samplepic: String
}

export interface Artist {
    id: Number,
    created_at: String,
    updated_at: String,
    email: String,
    userType: String,
    fullName: String,
    Phone: String,
    isVerified: Boolean,
    profile: Profile
}

export const mockArtists: Artist[] =
[
    {
        "id": 38,
        "created_at": "2019-01-22T16:51:50.102Z",
        "updated_at": "2019-01-22T16:51:50.102Z",
        "email": "yudeepu33@gmail.com",
        "userType": "artist",
        "fullName": "rumit man ",
        "Phone": "12345",
        "isVerified": false,
        "profile": {
            "id": 20,
            "created_at": "2019-01-22T16:51:50.106Z",
            "updated_at": "2019-01-22T16:52:19.470Z",
            "streetName": null,
            "expert": "now",
            "role": "enough",
            "bio": "now",
            "artistId": 38,
            "CV": "public/uploads/CV/test.pdf",
            "profilepic": "public/uploads/profilepic/test.jpg",
            "samplepic": "public/uploads/sampleart/test.jpg"
        }
    },
    {
        "id": 36,
        "created_at": "2019-01-22T16:45:01.688Z",
        "updated_at": "2019-01-22T16:45:01.688Z",
        "email": "yudeepu12685@gmail.com",
        "userType": "artist",
        "fullName": "Yudeep Rajbhandari",
        "Phone": "12345",
        "isVerified": false,
        "profile": {
            "id": 18,
            "created_at": "2019-01-22T16:45:01.695Z",
            "updated_at": "2019-01-22T16:46:01.504Z",
            "streetName": null,
            "expert": "now",
            "role": "enough",
            "bio": "now",
            "artistId": 36,
            "CV": "public/uploads/CV/test.pdf",
            "profilepic": "public/uploads/profilepic/test.jpg",
            "samplepic": "public/uploads/sampleart/test.jpg"
        }
    }
]
