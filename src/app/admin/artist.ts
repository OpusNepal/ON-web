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
