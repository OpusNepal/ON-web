export interface Artist {
    id: string,
    artistId: string
    streetName: string,
    expert: string,
    role: string,
    bio: string,
    cv: string
    profile_pic: string,
    sample_art: string,
    fullName: string,
    email: string,
    phone: string,
    isVerified: boolean
}

export const artists: Artist[] = [
    {

        id: '1',
        artistId: '123',
        streetName: 'Street 101',
        expert: 'Sleeping',
        role: 'role1',
        bio: 'I am super hot!!',
        cv: 'typescript.pdf',
        profile_pic: 'https://anniversaire-celebrite.com/upload/250x333/homer-simpson-250.jpg',
        sample_art: 'http://maryhalfar.weebly.com/uploads/3/1/3/5/31353271/8d6cb3ca992d0e03a73d78a349f36267-melted-crayons-melted-crayon-art-diy_orig.jpg',
        fullName: 'Hot Cool',
        email: 'valid@email.com',
        phone: '+977980808080',
        isVerified: false
    },
    {
        id: '2',
        artistId: '46',
        streetName: 'Street 101',
        expert: 'Sleeping',
        role: 'role1',
        bio: 'I am super hot!!',
        cv: 'typescript.pdf',
        profile_pic: 'https://anniversaire-celebrite.com/upload/250x333/homer-simpson-250.jpg',
        sample_art: 'http://maryhalfar.weebly.com/uploads/3/1/3/5/31353271/8d6cb3ca992d0e03a73d78a349f36267-melted-crayons-melted-crayon-art-diy_orig.jpg',
        fullName: 'Hot Cool',
        email: 'valid@email.com',
        phone: '+977980808080',
        isVerified: false
    }
];