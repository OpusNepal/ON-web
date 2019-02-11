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

export interface ArtistOfTheWeek {
    id: Number
    created_at: String,
    updated_at: String,
    artistId: Number,
    users: Artist   
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


export const artistOfTheWeek = {
    "id": 2,
    "created_at": "2019-02-06T15:26:09.137Z",
    "updated_at": "2019-02-06T15:26:09.137Z",
    "artistId": 46,
    "users": {
        "id": 46,
        "created_at": "2019-02-02T07:47:03.273Z",
        "updated_at": "2019-02-07T13:21:33.646Z",
        "email": "yudeep.rajbhandari@gmail.com",
        "userType": "artist",
        "fullName": "Yudeep Rajbhandari",
        "Phone": "12345",
        "isVerified": true,
        "profile": {
            "id": 28,
            "created_at": "2019-02-02T07:47:03.287Z",
            "updated_at": "2019-02-02T07:47:24.293Z",
            "streetName": "user",
            "expert": "now",
            "role": "enough",
            "bio": "now",
            "artistId": 46,
            "CV": "public/uploads/CV/1549093644261Techical-Features-of-Opus-Nepal.pdf",
            "profilepic": "public/uploads/profilepic/1549093644263minions-despicable-me-2-wallpapers-desktop-backgrounds-1.jpg",
            "samplepic": "public/uploads/sampleart/1549093644270minions-despicable-me-2-wallpapers-desktop-backgrounds-1.jpg"
        }
    }
    
}

