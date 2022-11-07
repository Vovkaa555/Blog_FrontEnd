import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

import { Header } from './components/Header';
import { FullPost } from './pages/FullPost';
import { Home } from './pages/Home';
import { AddPost } from './pages/AddPost';
import { Login } from './pages/Login';
import { Registration } from './pages/Registrtation';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;
