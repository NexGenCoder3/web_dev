import './App.css';

// function to display multiple instances

function App() {
  const name=<h1 className="color">MY NAME IS DAVID MORE</h1>;
  const age=<h1 style={{ color: 'blue' }}>18</h1>;
  const phone=<h1 style={{ color: 'purple' }}>+2348125950445</h1>;
  const email=<h1 style={{ color: 'black' }}>ekeledavid39@gmail.com</h1>;

  const user=(
   <div>
    {name}
    {age}
    {phone}
    {email}
   </div>
  );

return(
  <div>
  {user}
  {user}
  </div>
  );
}


export default App;