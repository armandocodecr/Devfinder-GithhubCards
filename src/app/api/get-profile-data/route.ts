import { NextResponse } from "next/server"



export async function GET( username: string ) {
    console.log(username)
    const data = fetch(`https://api.github.com/users/${ username }`)
        .then(data => data.json())
        .then(res => res)
        .catch(err => console.log(err))

    return NextResponse.json(data)
}