import NextAuth from "next-auth"
import Discord from "@auth/core/providers/discord"

export const { handlers: { GET, POST }, auth } = NextAuth({ providers: [Discord] })