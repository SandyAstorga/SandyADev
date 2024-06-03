import { Routes, Route } from "react-router-dom";
import { Home, Courses, DetailArticle, Header, Footer } from "./helpers";
import { CategoryProvider } from './Contexts/CategoryProvider';
import { SearchProvider } from "./Contexts/SearchContext";


export const App = () => {

  return (
    <>
      <SearchProvider>
        <CategoryProvider>
          <Header />
          <div className="container-views">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/post/:id" element={<DetailArticle />} />
              <Route path="/search/:query" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </CategoryProvider>
      </SearchProvider>
    </>
  )
};

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404: Ups! Página no encontrada ☹️</h2>
    </div>
  )
};

