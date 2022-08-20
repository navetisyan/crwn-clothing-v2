import Home from "./routes/home/home.component";
import "./categories.styles.scss";

const App = () => {
  return (
    <div className="categories-container">
      <Directory categories={categories} />
    </div>
  );
};

export default App;
