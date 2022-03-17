/*function Banner2 () {
    const number = [1,2,4,6];
 
 <h1>la rue</h1>
    const numberd = number.map((numberE) => 
        (<li>{numberE}</li>)
    );
 
 return (<ul>
     {numberd}
 </ul>);
 
 }*/

 function Banner2 () {
    const number = [1,2,4,6];
 
  
 return (<ul>
     <h1>la rue</h1>
   { number.map((number1) => 
        <li>{number1}</li>
    )}
 </ul>);
 
 }




 export default Banner2;