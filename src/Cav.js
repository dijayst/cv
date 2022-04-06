import React from 'react'
import {Chat} from '@material-ui/icons'
import mine from './mine.jpeg';



const Cav = () => {
//const cust=[]

   // const [val, setval] = useState([20])
   // const update=(e,data)=>{ setval(data) }
   const html=100;
     const sass=90; 
      const mat=100; 
       const spar=25; 
        const uni=20; 
         const reactjs=100; 
          const ren=20; 
           const js=100;
           const blend=30;

    return (
        <div className="container" > 
          <div   className="paper2">
                
<div  className="div1" >
<h4>Olubiyi Esther</h4>
                  <img src={mine} alt="mine" height="150px" width="150px"/>
                  
                     <h6>Software Developer</h6>
                     
                    <h6>Contact </h6>
                    <hr/>
                    <p >Address: </p>
                   
                    <p >ikeja,lagos nig </p>
                    <p >phone: </p>
                   
                    <p >+2348154466302 </p>
                    <p >Email: </p>
                   
                    <p  >olubiyisther@gmail.com </p>
                   
</div>


<div  className="div2">
                     <h4>Skills</h4>
                     <hr className="hr"/>
                     <div className="skill">
                     <p className="typo" >MySql </p>     
                    <p className="typo" >Mongo DB </p>
                     <p className="typo" >Git hub</p>
                     <p className="typo" >Javascript es6</p>
                     <p className="typo" >React JS</p>
                     <p className="typo" >Material UI </p>
                     <p className="typo" > Node js </p>
                     <p className="typo" > HTML5 </p>
                     <p  className="typo" > Css 3 </p>
                     <p className="typo" >Sass </p>
                     <p className="typo" > Blender </p>
                     <p className="typo" > Unity </p>
                      <p className="typo" > Spark Ar</p>
                      </div>
        <br/>
                     <h4>EXPERIENCE</h4>
                     <hr/>
                         
                     <h4>PROGRAMMING</h4>
                     <hr/> 
                     <div style={{width:300}} className="div4">
                    <span className="span">React js</span>
                     <input className="input" value={reactjs}  max="100" min="10" step="10" type="range"/>
                   
                     <br/>
        
                    <span className="span">Javascript</span>
                     <input className="input" value={js}  max="100" min="10" step="10" type="range"/>
                    <br/>
                     
                    <span className="span">HTML & css</span>
                     <input className="input" value={html}  max="100" min="10" step="10" type="range"/>
                   
                     <br/>
                    <span className="span"> Sass </span>
                     <input className="input" value={sass}  max="100" min="10" step="10" type="range"/>
                   
                     <br/>
                     
                    <span className="span">React native</span>
                     <input className="input" value={ren}  max="100" min="10" step="10" type="range"/>
                   
                     <br/>
                     
                    <span className="span">Material ui</span>
                     <input className="input" value={mat}  max="100" min="10" step="10" type="range"/>
                   
                     <br/>
                     
                    <span className="span">Spark AR</span>
                     <input className="input" value={spar}  max="100" min="10" step="10" type="range"/>
                   
                     <br/>
                     
                    <span className="span">unity</span>
                     <input className="input" value={uni}  max="100" min="10" step="10" type="range"/>
                     <br/>
                     
                    <span className="span">Blender</span>
                     <input className="input" value={blend}  max="100" min="10" step="10" type="range"/>
                   
                     </div> 
            <br/>
              <h4>STRENGHTS</h4>
             
              
             <p  ><Chat/>Oral and Written Communication</p>
             
             <p  > Reliable and Consistent</p>
             
             <p  >Committed to lifelong Learning</p>
             
             <p  >Team Building</p>
        
             <br/>
             <h4>EDUCATION</h4>
             
             
             <p  >post graduate of Software Engineering</p>
             
             <p >Studied at NIIT</p>
             
             


<br/>
             <h4> PROGRAMMING PROJECTS</h4>
             <hr/>
             
                 
             <h6 style={{textDecoration:"underline"}}>*Tictacto</h6>
             <p  className="div3">it a game with two player where each take turns in playing. which ever player plays an horitontal or vertical game wins</p>
             
             <h6 style={{textDecoration:"underline"}}>*grade calculator </h6>
             <p  className="div3"> A grade calculator which allows user to enter their score and it grades them accordingly.</p>
             <h6 style={{textDecoration:"underline"}}>* Traffic light</h6>
          
             <p  className="div3">it was inspired by the real life traffic light which switch  from red to yellow then green.</p>
          
             <h6 style={{textDecoration:"underline"}}>* Animated a female model using (blender)</h6>
          
             <h6 style={{textDecoration:"underline"}}> *electrical lab vr</h6>
          
             <p  className="div3">it was made using blender and unity  in an electrical lab which allows user to be abel to pick up equipment</p>
          
            
             <h6 style={{textDecoration:"underline"}}>* map puzzel</h6>
          
             <p  className="div3">it made specially for kids to enable them know the names of the countries in the world.</p>
          
             
             <h6 style={{textDecoration:"underline"}}>* Weather App</h6>
          
             <p  className="div3">here we fetched an api from open weather using  axios and react .</p>
          
        
         
             <h6 style={{textDecoration:"underline"}}>*Todo list</h6>
          
             <p  className="div3">it helps users keep track of there activities.</p>
          
             
             <h6 style={{textDecoration:"underline"}}>*face filter</h6>
             
             <h6 style={{textDecoration:"underline"}}>*Ar game using spark</h6>
             
             </div>
             
             </div>
        </div>
    )
}

export default Cav
//style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}