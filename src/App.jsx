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

