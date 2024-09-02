class User {
  constructor(
    readonly id: number,
    readonly firstName: string,
    readonly lastName: string,
    readonly username: string,
    readonly isBot: boolean,
    readonly photoUrl?: string,
    readonly isPremium?: boolean,
  ) {}
}

export default User;
