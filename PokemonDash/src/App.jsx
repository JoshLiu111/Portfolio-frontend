import Header from "./components/Header";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/not-found";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "https://pokeapi.co/api/v2/pokemon";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [limit, setLimit] = useState(30);
  const [sortBy, setSortBy] = useState("order");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch(`${API_URL}?limit=${limit}`);

        if (!res.ok) throw Error("Failed to fetch data");
        const data = await res.json();
        const detailedPokemons = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            const details = await res.json();
            return details;
          })
        );
        setPokemons(detailedPokemons);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, [limit]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              pokemons={pokemons}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
