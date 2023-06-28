import { GithubCard, Search } from "./components/";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center">
      <Search />
      <GithubCard />
    </main>
  )
}
