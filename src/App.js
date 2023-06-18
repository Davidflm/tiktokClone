import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';
import db from './config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);

  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className='app__videos'>
        {videos.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })}
        {/* <Video
        likes={100}
        messages={700}
        shares={800}
        name="Lara Vitória"
        description="gato pulando"
        music="running music"
        url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
       /> */}

      </div>

    </div>
  );
}

export default App;
