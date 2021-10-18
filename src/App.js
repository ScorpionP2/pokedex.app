
import React from 'react';
import './App.css';
import Pokemon from './components/pokemon'
import DATA from './assets/pokemons'


class App extends React.Component{
 
  render(){

    

    return(

    <div>

      <h1 className= "title">Pokedex</h1>
      <div className= 'container-pokemon'>

        {
          DATA.map((item)=> (
            <Pokemon
          id={item.id}  
          name={item.name.english}
          photo={item.image}
          atk= {item.base.Attack}
          def={item.base.Defense}
          hp={item.base.HP}
          spAtk={item.base['Sp. Attack']}
          spDef={item.base['Sp. Defense']}
          spd={item.base.Speed}  
          types={item.type}
            />
          ))
        }
        
    
      </div>
    </div>
    
  )
}
}

export default App;
