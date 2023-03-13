import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {verifVoiture} from '../../Controller/SearchSuggestion.js'
import './SearchNavBar.css'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
     
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    backgroundColor:'rgba(101, 54, 54, 0.15)',
    color: 'inherit',
    textAlign:'left',
    borderRadius:'4px',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      //transition: theme.transitions.create('width'),
      width: '12ch',
    
    },
  }));

  

//le composant searchAppBar propose des mot cle en pleine recherche ux mui
function SearchNavBar() {
    
  
    const [resultats,setResultats] = useState([]);

    const handleChange = (event) =>{
      const prevResultats = verifVoiture(event.target.value);
      prevResultats.length===0?setResultats([]):setResultats(prevResultats);
      
    }
  
 

return(
<>
    <div className='searchNavbar'>
        <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
        </Search>
        

          <div className='container'>
                  {resultats.map((resultat)=>
                <div className='item-suggestion'  key={resultat.id}>
                  {resultat.name}
                </div>
              )}
          </div>
    </div>
        
        
        
        
        
     
</>
    )
}

export default SearchNavBar