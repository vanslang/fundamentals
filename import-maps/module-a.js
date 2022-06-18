import { secondGreetingPart } from 'module-b'
const firstGreetingPart = () => `Hello ${secondGreetingPart()}`

export default firstGreetingPart
