//css styling using react
import React from 'react'

const App = () => {
  return(
    <header>
    <nav class="navbar">
        <ul>
            <li><a href="a">home</a></li>
            <li><a href="a">about</a></li>
            <li><a href="a">services</a></li>
            <li><a href="a">contact us</a></li>
            <div class="search">
                <input type="text" name="search" id="search"></input>
            </div>
        </ul>

    </nav>
    </header>
    // <div>
    //   <h1> Hello world</h1>
    // </div>
  )
}
export default App;
