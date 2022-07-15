import { useRef } from 'react';
import { useState } from 'react';
import styles from './tour.module.scss';
function Tour({ setTours, index, img, title, price, description }) {
   const [isReadMore, setIsReadMore] = useState(false);
   const buttonRef = useRef()
   const cardRef = useRef()
   const handleReadMore = () => {
      setIsReadMore(!isReadMore);
   };
   const handleNotInterested = () => {
      buttonRef.current.classList.add(styles['pressed-btn'])
      cardRef.current.classList.add(styles['pull-right'])
      setTimeout(() => {
         cardRef.current.classList.remove(styles['pull-right'])
         buttonRef.current.classList.remove(styles['pressed-btn'])
         setTours(pre => {
            const nextState = [...pre]
            nextState.splice(index, 1)
            console.log(index)
            return nextState
         })
      }, 300);

   }
   return (
      <div ref={cardRef} className={styles['tour']}>
         <div
            className={styles['tour__image']}
            style={{ backgroundImage: `url(${img})` }}
         ></div>
         <div className={styles['tour__info']}>
            <span className={styles['tour__info-price']}>{price}</span>
            <h3 className={styles['tour__info-title']}>{title}</h3>
            <p className={styles['tour__info-desc']}>
               {isReadMore ? (
                  <>{description}</>
               ) : (
                  <>{description.substring(0, 250)}...</>
               )}
               <span
                  onClick={handleReadMore}
                  className={styles['toggle-show-btn']}
               >
                  {isReadMore ? ' Show less' : ' Read more'}
               </span>
            </p>
         </div>
         <button onClick={handleNotInterested} ref={buttonRef} className={styles['not-interested-btn']}>Not Interested</button>
      </div>
   );
}
export default Tour;
