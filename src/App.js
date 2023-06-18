import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
       <Video
        likes={100}
        messages={700}
        shares={800}
        name="David Flávio de LM"
        description="Video de teste da aula"
        music="epic music background"
        url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
       />
       <Video
        likes={100}
        messages={700}
        shares={800}
        name="Lara Vitória"
        description="gato pulando"
        music="running music"
        url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
       />
       
      </div>
      
    </div>
  );
}

export default App;
