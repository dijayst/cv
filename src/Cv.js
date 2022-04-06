import React from 'react'
import {  Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import {Chat} from '@material-ui/icons'
import {Slider} from '@material-ui/core';
import mine from './mine.jpeg';


const useStyles=makeStyles({
    typo:{
        fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        fontSize:"small",
        marginRight:"18"
        
    },
    Slider:{
        color:"black"
    },
    span:{
        color:"gold",
        fontSize:"medium"
    },
    div4:{
margin:"0% 20% 0% 35%",

    },
    paper2:{
    
  backgroundImage: 'linear-gradient(to right,rgb(154 154 154) 30%,#ffffff 25%)',
},
div2:{
float:"right",
width:"70%",
marginTop:"-40%",
margin:"0% 20% 0% 35%"

},
    div1:{
        float:"left",
        color:"#181336",
        width:"30%",
        height:"100%",
        marginTop:"1%"
    },
    div3:{
        marginRight:"-30%"
    },
    skill:{
        display:"flex",
        justifyContent:"space-around",
        wordSpacing: "normal",
        textDecoration:"underline"
    }
})
const Cv = () => {
const cust=[
    ]

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
    const classes=useStyles()
    return (
        <div > 
          <Grid container wordSpacing={2}  direction="column"  className={classes.paper2}>
                
<Grid item   xs={5} style={{minHeight:"100vh"}} justify="center" alignItems="center" className={classes.div1} >
<Typography  variant="h5">Olubiyi Esther</Typography>
                  <img src={mine} alt="mine" height="150px" width="150px"/>
                  
                     <Typography variant="h6">Software Developer</Typography>
                     
                    <Typography variant="h6">Contact </Typography>
                    <hr/>
                    <Typography variant="body1">Address: </Typography>
                   
                    <Typography variant="body2">ikeja,lagos nig </Typography>
                    <Typography variant="body1">phone: </Typography>
                   
                    <Typography variant="body2">+2348154466302 </Typography>
                    <Typography variant="body1">Email: </Typography>
                   
                    <Typography fontSize={{lg:30,md:20,sm:15,xs:20}} variant="body2">olubiyisther@gmail.com </Typography>
                   
</Grid>


<Grid item  justify="center" alignItems="center" lg={3} sm={12} md={8} xs={6} className={classes.div2}>
                     <Typography variant="h5">Skills</Typography>
                     <hr className={classes.hr}/>
                     <div className={classes.skill}>
                     <Typography className={classes.typo} variant="body2">MySql </Typography>     
                    <Typography className={classes.typo} variant="body2">Mongo DB </Typography>
                     <Typography className={classes.typo} variant="body2">Git hub</Typography>
                     <Typography className={classes.typo} variant="body2">Javascript es6</Typography>
                     <Typography className={classes.typo} variant="body2">React JS</Typography>
                     <Typography className={classes.typo} variant="body2">Material UI </Typography>
                     </div>
                     <br/>
                     <div className={classes.skill}>
                     <Typography className={classes.typo} variant="body2"> Node js </Typography>
                     <Typography className={classes.typo} variant="body2"> HTML5 </Typography>
                     <Typography  className={classes.typo} variant="body2"> Css 3 </Typography>
                     <Typography className={classes.typo} variant="body2">Sass </Typography>
                     <Typography className={classes.typo} variant="body2"> Blender </Typography>
                     <Typography className={classes.typo} variant="body2"> Unity </Typography>
                      <Typography className={classes.typo} variant="body2"> Spark Ar</Typography>
                      </div>
        <br/>
                     <Typography variant="h5">EXPERIENCE</Typography>
                     <hr/>
                         
                     <Typography variant="h5">PROGRAMMING</Typography>
                     <hr/> <div style={{width:300}} className={classes.div4}>
                    <span className={classes.span}>React js</span>
                     <Slider className={classes.Slider} value={reactjs}  marks={cust}/>
                   
                     </div> 
                    
                     <div style={{width:300}} className={classes.div4}>
                    <span className={classes.span}>Javascript</span>
                     <Slider className={classes.Slider} value={js}  marks={cust}/>
                     </div> 
                     <div style={{width:300}} className={classes.div4}>
                    <span className={classes.span}>HTML & css</span>
                     <Slider className={classes.Slider} value={html}  marks={cust}/>
                   
                     </div> 
                     <div style={{width:300}} className={classes.div4}>
                    <span className={classes.span}>Sass</span>
                     <Slider className={classes.Slider} value={sass}  marks={cust}/>
                   
                     </div> 
                     <div style={{width:300}} className={classes.div4}>
                    <span className={classes.span}>React native</span>
                     <Slider className={classes.Slider} value={ren}  marks={cust}/>
                   
                     </div> 
                     <div style={{width:300}} className={classes.div4}>
                    <span className={classes.span}>Material ui</span>
                     <Slider className={classes.Slider} value={mat}  marks={cust}/>
                   
                     </div> 
                     <div style={{width:300}} className={classes.div4}>
                    <span className={classes.span}>Spark AR</span>
                     <Slider className={classes.Slider} value={spar}  marks={cust}/>
                   
                     </div> 
                     <div style={{width:300}} className={classes.div4}>
                    <span className={classes.span}>unity</span>
                     <Slider className={classes.Slider} value={uni}  marks={cust}/>
                   
                     </div> 
                     <div style={{width:300}} className={classes.div4}>
                    <span className={classes.span}>Blender</span>
                     <Slider className={classes.Slider} value={blend}  marks={cust}/>
                   
                     </div> 
            <br/>
              <Typography variant="h5">STRENGHTS</Typography>
             
              
             <Typography variant="body2" ><Chat/>Oral and Written Communication</Typography>
             
             <Typography variant="body2" > Reliable and Consistent</Typography>
             
             <Typography variant="body2" >Committed to lifelong Learning</Typography>
             
             <Typography variant="body2" >Team Building</Typography>
        
             <br/>
             <Typography variant="h5">EDUCATION</Typography>
             
             
             <Typography variant="body2" >post graduate of Software Engineering</Typography>
             
             <Typography variant="body2">Studied at NIIT</Typography>
             
             <Typography variant="body2">GPA </Typography>


<br/>
             <Typography variant="h5"> PROGRAMMING PROJECTS</Typography>
             
             
                 
             <Typography variant="h6" style={{textDecoration:"underline"}}>*Tictacto</Typography>
             <Typography varient="body2" className={classes.div3}>it a game with two player where each take turns in playing. which ever player plays an horitontal or vertical game wins</Typography>
             
             <Typography variant="h6" style={{textDecoration:"underline"}}>*grade calculator </Typography>
             <Typography varient="body2" className={classes.div3}> A grade calculator which allows user to enter their score and it grades them accordingly.</Typography>
             <Typography variant="h6" style={{textDecoration:"underline"}}>* Traffic light</Typography>
          
             <Typography varient="body2" className={classes.div3}>it was inspired by the real life traffic light which switch  from red to yellow then green.</Typography>
          
             <Typography variant="h6" style={{textDecoration:"underline"}}>* Animated a female model using (blender)</Typography>
          
             <Typography variant="h6" style={{textDecoration:"underline"}}> *electrical lab vr</Typography>
          
             <Typography varient="body2" className={classes.div3}>it was made using blender and unity  in an electrical lab which allows user to be abel to pick up equipment</Typography>
          
            
             <Typography variant="h6" style={{textDecoration:"underline"}}>* map puzzel</Typography>
          
             <Typography varient="body2" className={classes.div3}>it made specially for kids to enable them know the names of the countries in the world.</Typography>
          
             
             <Typography variant="h6" style={{textDecoration:"underline"}}>* Weather App</Typography>
          
             <Typography varient="body2" className={classes.div3}>here we fetched an api from open weather using  axios and react .</Typography>
          
        
         
             <Typography variant="h6" style={{textDecoration:"underline"}}>*Todo list</Typography>
          
             <Typography varient="body2" className={classes.div3}>it helps users keep track of there activities.</Typography>
          
             
             <Typography variant="h6" style={{textDecoration:"underline"}}>*face filter</Typography>
             
             <Typography variant="h6" style={{textDecoration:"underline"}}>*Ar game using spark</Typography>
             
             </Grid>
             
             </Grid>
        </div>
    )
}

export default Cv
//style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}