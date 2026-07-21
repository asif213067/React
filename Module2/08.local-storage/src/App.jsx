// import React from 'react'

const App = () => {

  // localStorage.clear();
  // sessionStorage.clear();

  // localStorage.setItem('user', 'Asif');
  // localStorage.setItem('thame', 'dark');

  // const user = localStorage.getItem('user');
  // console.log(user);

  // localStorage.removeItem('thame');

  // const user = {
  //   userName: 'Asif',
  //   age: 24,
  //   city: 'Pabna',
  // }

  // localStorage.setItem('user', JSON.stringify(user));

  // const user = localStorage.getItem('user');
  // console.log(typeof user);

  // convert string to main from
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  
  

  return (
    <div>Hi</div>
  )
}

export default App