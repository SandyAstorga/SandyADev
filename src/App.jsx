import { Routes, Route } from "react-router-dom";
import { Home, About, DetailArticle, Header, Footer } from "./helpers";
import { CategoryProvider } from './Contexts/CategoryProvider';


export const App = () => {

  return (
    <>
      <CategoryProvider>
        <Header />
        <div className="container-views">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/post/:id" element={<DetailArticle />} />
          </Routes>
        </div>
        <Footer />
      </CategoryProvider>
    </>
  )
};

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404: Ups! Página no encontrada ☹️</h2>
    </div>
  )
}

