import { useState, createContext, ReactNode } from 'react'

export interface IAuth {
	user: string
	cb: () => void
	newUser: string
	children?: ReactNode | undefined
	signin: () => void
	signout: () => void
}
export const AuthContext = createContext<IAuth | null>(null)

export const AuthProvider = ({ children }: IAuth) => {
	const [user, setUser] = useState('')

	const signin = ({ newUser, cb }: IAuth) => {
		setUser(newUser)
		cb()
	}
	const signout = ({ cb }: IAuth) => {
		setUser('')
		cb()
	}

	const value = { user, signin, signout }

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
