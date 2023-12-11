import './App.css';
import MyRouter from './Router';
// import bgm from "./audio/so_far_away.mp3";

function App() {
  return (
    <div>
    {/* <audio src={bgm} controls autoPlay loop style={{ position: 'fixed', top: '-1000px' }}/> */}
    <MyRouter/>
    </div>
  );
}

export default App;
