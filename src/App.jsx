import { Routes, Route } from "react-router-dom";
import { Home, About, DetailArticle, Header, Footer} from "./helpers";


export const App = () => {

  return (
    <>
      <Header />
      <div className="container-views">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/post/:id" element={<DetailArticle />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
};

