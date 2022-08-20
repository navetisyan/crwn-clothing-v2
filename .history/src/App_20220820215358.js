import Home from "./components/directory/directory.component";

import "./categories.styles.scss";

const App = () => {
  return (
    <div className="categories-container">
      <Directory categories={categories} />
    </div>
  );
};

export default App;
