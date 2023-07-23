export type TRole = 'user' | 'admin'

export type TType = 'regular' | 'subscriber'

export interface IUser {
    userId:         number
    firstName:      string,
    lastName:       string,
    age:            string,
    email:          string,
    password:       string,
    role:           TRole,
    status:         boolean,
    wallet:         number,
    type:           TType
}