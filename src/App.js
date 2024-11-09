import './App.css';
import Index from './pages/Index';
document.body.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})
function App() {
  return (
    <div className="App h-screen bg-transparent ">
      <Index/>
    </div>
  );
}

export default App;
