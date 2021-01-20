import React, { useEffect } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';



const useSearchStyles = makeStyles((theme) => ({
    root: {
      width: 280,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }));

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },


    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



export default function Search() {
    useEffect(() => {
        fetch('http://localhost:3001/api/v1/projects/')
          .then(res => res.json())
          .then(projects => setProjects(projects));
      }, []);

    const classes = useStyles();
    const searchClasses = useSearchStyles();
    const [val,setVal]= React.useState({})

    const [projects, setProjects] = React.useState([]) ;

    const handleClick = () => {
        setVal(projects[0]);//you pass any value from the array of top100Films
       // set value in TextField from dropdown list
     };
    
   


// console.log(projects)
// console.log(search)
    return (
        <div className={searchClasses.root}>
          
      <Autocomplete
        
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={projects}
        getOptionLabel={(option) => option.language}
        // handleParams(option.language)
        

        // defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
 
        renderInput={(params) => (
          <TextField {...params}  color='secondary' placeholder="Search Projects by language" />
       
        
        )}
  
      />
      <IconButton><SearchIcon />
      
      </IconButton>
 

</div>

             

    )
}