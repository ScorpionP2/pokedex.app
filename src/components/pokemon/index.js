import React from "react";
import PropTypes from 'prop-types';
import  {handleGenerateBg}  from '../../utils/index';

class Pokemon extends React.Component{
    render(){
      const typePokemon = handleGenerateBg(this.props.types[0])
        return(
          
        <div>
    
          <div className="pokemon" style={{background: typePokemon}}>
            <img className="pokemon-image" 
            src= {this.props.photo}
            alt={`${this.props.id} pokemon ${this.props.name}`}
            />
            <h2>{this.props.id}-{this.props.name}</h2>
    
            <ul className="pokemon-info">
              <li>HP: {this.props.hp}</li>
              <li>ATK:{this.props.atk}</li>
              <li>DEF:{this.props.def}</li>
              <li>SP ATK:{this.props.spAtk}</li>
              <li>SP DEF:{this.props.spDef}</li>
              <li>Speed:{this.props.spd}</li>
            </ul>
            
            <div>
              <span>{this.props.types.join(' / ')}</span>
            </div>
          </div>
        </div>
        
      )
    }
}

Pokemon.propTypes={
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  atk: PropTypes.number.isRequired,
  def: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  types: PropTypes.arrayOf('string')
}

export default Pokemon