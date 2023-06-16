import React from "react";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import "./videoFooter.css";


function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@David Flávio</h3>
        <p>Descrição do video atual</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__title">
            <p>Título da Música</p>
          </div>

        </div>

      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  )
}

export default VideoFooter;