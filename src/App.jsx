import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/posts/:postID' element={<PostDetails />}/>
            </Routes>
        </>
    );
}

export default App;
