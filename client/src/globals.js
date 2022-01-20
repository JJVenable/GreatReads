export const BASE_URL =
process.env.NODE_ENV === 'production'
? `${window.location.origin}/api`
: 'http://localhost:3001/api' 
