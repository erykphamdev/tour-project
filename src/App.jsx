import { useState } from 'react';
import { Loading, Tour } from './components';
import { useEffect } from 'react';
function App() {
   const [isLoading, setIsLoading] = useState(true);
   const [tours, setTours] = useState([]);
   useEffect(() => {
      const getTours = async () => {
         const api = 'http://localhost:3000/tours';
         const res = await fetch(api);
         if (res.status === 404) {
            alert('oh, something went wrong!');
            throw '';
         }
         const data = await res.json();
         setIsLoading(false);
         setTours(data);
      };
      getTours();
   }, []);
   return (
      <div className='App'>
         <h2 className='intro'>Our Tours</h2>
         {isLoading ? (
            <Loading />
         ) : (
            tours.map((tour, index) => (
               <Tour key={index} index={index} setTours={setTours} {...tour} />
            ))
         )}
      </div>
   );
}

export default App;
