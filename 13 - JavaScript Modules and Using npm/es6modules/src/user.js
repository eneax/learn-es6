import slug from 'slug';
import { url } from './config';
import md5 from 'md5';

// Main function, so it's a default export 
export default function User(name, email, website) {
  return { name, email, website };
}

// Named export
export function createURL(name) {
  // const url = 'http://wesbos.com';
  return `${url}/users/${slug(name)}`;
}

// Named export
export function gravatar(email) {
  const hash = md5(email.toLowerCase());
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
  return photoURL;
}
