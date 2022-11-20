import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BrokenNecklace from "./pages/BrokenNecklace/BrokenNecklace";
import Dashboard from "./pages/Books/Dashboard";
import Root from "./pages/Root";
import BookDetail from "./pages/Books/BookDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route index element={<Dashboard />} />
            <Route path='/books/:id' element={<BookDetail />} />
            <Route path='/broken-necklace/' element={<BrokenNecklace />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
