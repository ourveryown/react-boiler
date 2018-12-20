import { Login } from 'domains/auth/pages'
import { Home } from 'domains/home/pages'

export const NO_LOGIN = [{ path: '', component: Login }]
export const LOGGED_IN = [{ path: '', component: Home }]
