export interface User {
  content: string,
  date: number,
  followers: number,
  image:string,
  pseudo: string,
  spot: string,
  tweets?: string[] | number,
  username: string,

}

export interface ExtendedUser extends User{
  profilUser: string
}