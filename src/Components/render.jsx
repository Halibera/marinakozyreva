import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from '../App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App state={state} getAlbum={getAlbum} />
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));


export let rerender = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} />

        </React.StrictMode>
    )
}

