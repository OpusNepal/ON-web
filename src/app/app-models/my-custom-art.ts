interface Profile {
    id: Number,
    created_at: string,
    updated_at: string,
    CV: string,
    artistId: Number,
    bio: Number,
    expert: string,
    profilepic: string,
    samplepic: string,
    streetName: string,
    role: string
}

interface Artist {
    Phone: string,
    created_at: string,
    email: string,
    fullName: string,
    id: Number,
    isVerified: boolean,
    profile: Profile,
    updated_at: string,
    userType: string
}

export interface MyCustomArt {
    Framing: string,
    Image: string,
    alt_address: string,
    alt_phone: string,
    artist: Artist,
    artistId: Number,
    buyerId: Number,
    created_at: string,
    updated_at: string,
    default_address: string,
    description: string,
    id: Number,
    isDelivered: boolean
}


