import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'admin',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true 
    },
    {
        name: 'user1',
        email: 'user1@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false 
    },
    {
        name: 'user2',
        email: 'user2@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false 
    },
    {
        name: 'user3',
        email: 'user3@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false 
    }
];

export default users;