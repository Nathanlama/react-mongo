import React from 'react'



function Bank(name) {
  let _balance = 0;
  this.name = name;

  this.getBalance = function () {
    return _balance;
  }

  this.setBalance = function (amount) {
    _balance += amount;
  }

}

const App = () => {

  const per = new Bank('prabhu');
  per.setBalance(90000);


  console.log(per.getBalance());



  return (
    <div>


    </div>
  )
}
export default App
