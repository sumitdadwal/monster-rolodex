import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

  const [searchValue, setSearchValue] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  const [title, setTitle] = useState('');

  console.log('render')
  
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  

  const onTitleChange = (event) => {
    setTitle(event.target.value.toLowerCase())
    }

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value.toLowerCase())
    }
  
  useEffect(() => {
    const newFilteredMonsters =  monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchValue])
  


  
  return(
    <div>
      <div className='app-title'>
        <h1>
          {title}
        </h1>
      </div>
      <SearchBox className={'monster-search-box'} placeholder={'search-monster'} onChangeHandler={onChangeHandler}/>
      <SearchBox className={'title-search-box'} placeholder={'change-title'} onChangeHandler={onTitleChange}/>

      <CardList displayMonsters={filteredMonsters} />



      </div>

  )
}


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],  
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(()=>{
//         return {monsters: users}
//       },
//       () => {
//         console.log(this.state);
//       }
//       ))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
  
//     this.setState(() => {
//       return { searchField };
//     })

//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
    
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
        
      
//       <SearchBox onChangeHandler={onSearchChange} placeholder={"search mosters"} className={'monsters-search-box'} />
//       <CardList displayMonsters={filteredMonsters} />
//       </div>
//     );

//   }
  
// }

export default App;