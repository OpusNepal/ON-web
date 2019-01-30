export interface Artist {
    id: Number,
    artistId: Number
    streetName: string,
    expert: string,
    role: string,
    bio: string,
    CV: string
    profilepic: string,
    samplepic: string,
  //  fullName: string,
   // email: string,
   // phone: string,
   // isVerified: boolean
}

export const artists: Artist[] = [
    {
    id: 3,
    streetName: 'street 101',
    expert: 'yes',
    role: 'yes',
    bio: 'yes',
    artistId: 17,
    CV: 'public/uploads/CV/1547734519866Techical-Features-of-Opus-Nepal.pdf',
    profilepic: 'public/uploads/profilepic/1547734519870simpsons-the-great-phatsby-1-920x584.jpg',
    samplepic: 'public/uploads/sampleart/1547734519871simpsons-the-great-phatsby-1-920x584.jpg' 
    },

    {
        id: 3,
        streetName: 'street 101',
        expert: 'yes',
        role: 'yes',
        bio: 'yes',
        artistId: 17,
        CV: 'public/uploads/CV/1547734519866Techical-Features-of-Opus-Nepal.pdf',
        profilepic: 'public/uploads/profilepic/1547734519870simpsons-the-great-phatsby-1-920x584.jpg',
        samplepic: 'public/uploads/sampleart/1547734519871simpsons-the-great-phatsby-1-920x584.jpg' 
        }
];