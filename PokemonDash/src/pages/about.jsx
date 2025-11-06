const AboutPage = () => {
  return (
    <div className="about">
      <h1>About Pokémon Dash</h1>

      <section>
        <h2>🎯 Project Overview</h2>
        <p>
          Pokémon Dash is a React-based web application that displays Pokémon
          data fetched from the public{" "}
          <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
            PokeAPI
          </a>
          . Users can browse, search, and sort Pokémon, and view basic
          information such as type, height, and weight.
        </p>
      </section>

      <section>
        <h2>⚙️ Tech Stack</h2>
        <ul>
          <li>
            <b>React 19</b> – Component-based UI building
          </li>
          <li>
            <b>Vite</b> – Fast development server and bundler
          </li>
          <li>
            <b>React Router</b> – Client-side routing
          </li>
          <li>
            <b>PokeAPI</b> – REST API for Pokémon data
          </li>
          <li>
            <b>CSS Flex/Grid</b> – Layout and responsive design
          </li>
        </ul>
      </section>

      <section>
        <h2>🧩 App Structure</h2>
        <p>The project is divided into three main layers:</p>
        <ol>
          <li>
            <b>Pages</b> – Define route-level components such as{" "}
            <code>HomePage</code> and <code>AboutPage</code>.
          </li>
          <li>
            <b>Components</b> – Reusable UI blocks like <code>Header</code>,{" "}
            <code>Card</code>, <code>Spinner</code>, and{" "}
            <code>FilterInput</code>.
          </li>
          <li>
            <b>Hooks & State</b> – Managed by <code>useState</code> and{" "}
            <code>useEffect</code> for fetching and rendering Pokémon data
            dynamically.
          </li>
        </ol>
      </section>

      <section>
        <h2>🔗 API Integration</h2>
        <p>
          The app fetches data from{" "}
          <code>https://pokeapi.co/api/v2/pokemon?limit=30</code>. Each
          Pokémon’s detail is retrieved via its individual <code>url</code> to
          show image, type, ability, height, and weight.
        </p>
      </section>

      <section>
        <h2>🧠 Key React Concepts</h2>
        <ul>
          <li>
            Using <code>useEffect()</code> to fetch data on component mount
          </li>
          <li>
            Managing states with <code>useState()</code> for loading, filtering,
            and sorting
          </li>
          <li>
            Passing props from <code>App</code> → <code>HomePage</code> →{" "}
            <code>Card</code>
          </li>
          <li>
            Routing different pages with <code>react-router</code>
          </li>
        </ul>
      </section>

      <section>
        <h2>🎨 UI Features</h2>
        <ul>
          <li>
            Hover animation on Pokémon cards using CSS <code>transform</code>
          </li>
          <li>Responsive grid layout</li>
          <li>Dynamic filtering and sorting options</li>
        </ul>
      </section>

      <section>
        <h2>🚀 Future Improvements</h2>
        <ul>
          <li>Adding detailed Pokémon pages (abilities, stats, evolutions)</li>
          <li>Pagination or infinite scroll</li>
          <li>Dark/light theme toggle</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
