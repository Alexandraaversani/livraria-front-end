// import styles from './page.module.css'
import BannerPrincipal from './components/BannerPrincipal';
import Footer from './components/footer';
import Header from './components/header';
import NewsLetter from './components/newsLetter';
import Categories from './components/secaoCategorias';
import Releases from './components/secaoLancamentos';
import Livros from './components/secaoLivros';
// import SecaoCategorias from './components/secaoCategorias';
// import SecaoLancamentos from './components/secaoLancamentos';
// import SecaoLivros from './components/secaoLivros';

export default function Home() {
  return (
    <div >
      <Header />
      <BannerPrincipal />
      <Livros />
      <Categories />
      <Releases />
      <NewsLetter />
      <Footer />
      
    </div>
  );
}
