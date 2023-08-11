import InputSection from "./components/inputSection";
import MoviesList from "./components/moviesList";

export default function Home() {
  return (
    <div className="w-full md:max-w-4xl bg-slate-100 mx-auto p-5">
      <InputSection />
      <MoviesList />
    </div>
  )
}
