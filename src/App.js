import banner from './img/wallpaper.jpeg';
import './App.css';

function blocoTenis(imagem){
  return(
    <div className="blocoTenis">
      <img src={imagem} alt="img"></img>
    </div>
  );
}
function gerarBlocos(){
  const tudo = [""];
  for(let i = 1; i < 9; i++){
    let image = require('./img/'+i+'.png');
    tudo.push(blocoTenis(image.default));
  }
  return(tudo);
}

function App() {
  return (
    <div className="App">
      <div className="barraAvisos">
        <p>Ganhe R$ 10,00 de desconto no frete</p>
      </div>
      <div className="barraTitulo">
        <h2>Jordan Shoes</h2>
      </div>
      <div className="bannerPrincipal">
        
        <div className="texto">
          <h1>A melhor loja de Jordan</h1>
          <p>O tênis Jordan é fruto de uma velha e forte parceiria entre a Nike e o jogador Michael Jordan.</p>
        </div>
        <img src={banner} alt="jordan"></img>
      </div>
      <div id="corpo">
        <h1>Destaques</h1>
        <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
        <div className="tenis">
          {gerarBlocos()}
        </div>
      </div>
    <div id="footer">
      <p>Todos os direitos reservados.</p>
    </div>
    </div>
  );
}

export default App;
