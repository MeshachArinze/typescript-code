enum Role { ADMIN = 'ADMIN', READ_ONLY = 'READ ONLY', AUTHOR = 'AUTHOR' };

const items = {
    name: 'Victor',
    age: 10,
    food: true,
    hobbies: ['sport', 'cooking'],
    role: Role.ADMIN
}

if (items.role === Role.ADMIN) {
    console.log('is author');
} else {
    console.log('jdjd')
}