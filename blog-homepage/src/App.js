
import './App.css';
import MissedArticle from './MissedArticle';
import YourArticle from './YourArticle';

function App() {
  return (
  <div className="App">
    <p align="center">For You</p>
    <div class="flex-container-yourArticle">
      <YourArticle/>
    </div>
    <p>In case you missed it</p>
    <div class=".flex-container-missedArticles">
      <MissedArticle />
    </div>
  </div>
  );
 }

export default App;
