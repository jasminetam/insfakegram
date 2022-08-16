import { faker } from '@faker-js/faker';

interface User {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  companyName: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
}

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    companyName: faker.company.name(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});
