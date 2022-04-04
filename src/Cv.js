import React from 'react'
import { Paper, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import {Chat} from '@material-ui/icons'
import {Slider} from '@material-ui/core';

const useStyles=makeStyles({
    typo:{
        fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        fontSize:"large",
        marginRight:"18"
        
    },
    Slider:{
        color:"#181336"
    },
    span:{
        color:"gold",
        fontSize:"large"
    },
    paper2:{
        float:"right",
    width:"40%",
    marginTop:"1%"
},
    paper1:{
        float:"left",
        color:"#181336",
        width:"60%"
    },
    skill:{
        display:"flex",
        justifyContent:"space-around",
        wordSpacing: "normal",
        textDecoration:"underline"
    },
    hr:{

    }
})
const Cv = () => {
const cust=[
    {
        value:0,
        label:"0"
    },
    {
        value:10,
        label:"10"
    }, {
        value:20,
        label:"20"
    } ,{
        value:30,
        label:"30"
    }, {
        value:40,
        label:"40"
    }, {
        value:50,
        label:"50"
    }, {
        value:60,
        label:"60"
    },
     {
        value:70,
        label:"70"
    }, {
        value:80,
        label:"80"
    },{
        value:90,
        label:"90"
    },{
        value:100,
        label:"100"
    }]

   // const [val, setval] = useState([20])
   // const update=(e,data)=>{ setval(data) }
   const val=20;
    const classes=useStyles()
    return (
        <>
        
         <Paper className={classes.paper1}>
             <Typography  variant="h5">STER</Typography>
             <Typography variant="h6">Software Developer</Typography>
             <Typography variant="p">Skills</Typography>
             <hr className={classes.hr}/>
             <div className={classes.skill}>
             <Typography className={classes.typo} variant="body2">MySql </Typography>     
            <Typography className={classes.typo} variant="body2">Mongo DB </Typography>
             <Typography className={classes.typo} variant="body2">Git hub</Typography>
             <Typography className={classes.typo} variant="body2">Javascript es6</Typography>
             <Typography className={classes.typo} variant="body2">React JS</Typography>
             <Typography className={classes.typo} variant="body2">Material UI </Typography>
             
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


             <Typography variant="subtitle">skill</Typography>

             <Typography variant="caption">yhello</Typography>
             <Typography variant="overline">why</Typography>
             <hr/>
             <Typography variant="subtitle">skill</Typography>
<br/>
             <Typography variant="h5"> PROGRAMMING PROJECTS</Typography>
             <hr/>
             <div>
                 
             <Typography variant="h6">Tictacto</Typography>
             <Typography varient="body2">it a game with two player where each take turns in playing. which ever player plays an horitontal or vertical game wins</Typography>
             </div>
            
             <div>
             <Typography variant="h6">grade calculator </Typography>
             <Typography varient="body2"> A grade calculator which allows user to enter their score and it grades them accordingly.</Typography>
             </div>
             <div>
             <Typography variant="h6"> Traffic light</Typography>
          
             <Typography varient="body2">it was inspired by the real life traffic light which switch  from red to yellow then green.</Typography>
          
             </div>
             <div>
             <Typography variant="h6"> Animated a female model using (blender)</Typography>
          
             </div>

             <div>
             <Typography variant="h6"> electrical lab vr</Typography>
          
             <Typography varient="body2">it was made using blender and unity  in an electrical lab which allows user to be abel to pick up equipment</Typography>
          
             </div>
             <div>
             <Typography variant="h6"> map puzzel</Typography>
          
             <Typography varient="body2">it made specially for kids to enable them know the names of the countries in the world.</Typography>
          
             </div><div>
             <Typography variant="h6"> Weather App</Typography>
          
             <Typography varient="body2">here we fetched an api from open weather using  axios and react .</Typography>
          
             </div>
             <div>
             <Typography variant="h6"> Todo list</Typography>
          
             <Typography varient="body2">it helps users keep track of there activities.</Typography>
          
             </div>
                </Paper>   




             <Paper className={classes.paper2}>
                 
             <Typography variant="h4">PROGRAMMING</Typography>
             <hr/> <div style={{width:300,margin:60}}>
            <span className={classes.span}>React js</span>
             <Slider className={classes.Slider} value={val}  marks={cust}/>
           
             </div> 
            
             <div style={{width:300,margin:60}}>
            <span className={classes.span}>Javascript</span>
             <Slider className={classes.Slider} value={val}  marks={cust}/>
           
             </div> 

             <div style={{width:300,margin:60}}>
            <span className={classes.span}>HTML & css</span>
             <Slider className={classes.Slider} value={val}  marks={cust}/>
           
             </div> 
             <div style={{width:300,margin:60}}>
            <span className={classes.span}>Sass</span>
             <Slider className={classes.Slider} value={val}  marks={cust}/>
           
             </div> 
             <div style={{width:300,margin:60}}>
            <span className={classes.span}>React native</span>
             <Slider className={classes.Slider} value={val}  marks={cust}/>
           
             </div> 
             <div style={{width:300,margin:60}}>
            <span className={classes.span}>Material ui</span>
             <Slider className={classes.Slider} value={val}  marks={cust}/>
           
             </div> 
             <div style={{width:300,margin:60}}>
            <span className={classes.span}>Spark AR</span>
             <Slider className={classes.Slider} value={val}  marks={cust}/>
           
             </div> 
             <div style={{width:300,margin:60}}>
            <span className={classes.span}>unity</span>
             <Slider className={classes.Slider} value={val}  marks={cust}/>
           
             </div> 
             <div style={{width:300,margin:60}}>
            <span className={classes.span}>Blender</span>
             <Slider className={classes.Slider} value={val}  marks={cust}/>
           
             </div> 
            
            
            
              <Typography variant="h4">STRENGHTS</Typography>
             <hr/>
              
             <Typography variant="body2"><Chat/>Oral and Written Communication</Typography>
             
             <Typography variant="body2"> Reliable and Consistent</Typography>
             
             <Typography variant="body2">Committed to lifelong Learning</Typography>
             
             <Typography variant="body2">Team Building</Typography>

             
             <Typography variant="h4">EDCATION</Typography>
             <hr/>
             
             <Typography variant="body2">post graduate of Software Engineering</Typography>
             
             <Typography variant="body2">Studied at NIIT</Typography>
             
             <Typography variant="body2">GPA </Typography>

             
             <Typography variant="h4">PROGRAMMING PROJECTS</Typography>
             <hr/>
             
             <Typography variant="body2">Tictacto Game</Typography>
             <hr/>
             
             <Typography variant="body2">face filter</Typography>
             <hr/>
             
             <Typography variant="body2">Ar game using spark</Typography>
             <hr/>
             
             
             






             </Paper>
        </>
    )
}

export default Cv
