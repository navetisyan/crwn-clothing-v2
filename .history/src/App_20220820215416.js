import Home from "./routes/home/home.component";
import "./categories.styles.scss";

const App = () => {
  return <Home categories={categories} />;
};

export default App;
