import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-5">
      <Nav></Nav>
      <main className="px-12 py-6 col-span-4 bg-cyan-50">Main content</main>
    </div>
  );
}

export default App;
