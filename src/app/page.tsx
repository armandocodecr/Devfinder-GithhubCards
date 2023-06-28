import { GithubCard, Search } from "./components/";

export default function Home() {
  return (
    <main className="flex w-screen h-auto flex-col items-center justify-center">
      <Search />
      <GithubCard />
    </main>
  )
}
