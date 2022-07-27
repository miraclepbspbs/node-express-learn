import React from 'react';
const Home = ({ a, b }) => {
  console.log(a, b);
  // let a = 2,
  //   b = 3;
  let [sum, setSum] = React.useState('sjdfo');
  //setSum 是个回调函数
  const add = () => {
    sum = a + b;
    setSum(sum);
    console.log(sum);
  };
  return (
    <div onClick={add}>
      求和
      <p> {sum}</p>
    </div>
  );

/*复制数组并添加新的元素**/

 // const [itemArr, setItem] = React.useState(['item1', 'item2']);
 //  const add = () => {
 //    setItem((itemArr) => [...itemArr, `item${itemArr.length + 1}`]); 
 //  };
 //  return (
 //    <div>
 //      <div onClick={add}>点击</div>
 //      <p>{itemArr}</p>;
 //    </div>
 //  );


/*提交表单数据**/

// window.onload = () => {
//     const myForm = document.getElementById('my-form');
//     myForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const { firstName, lastName } = e.target.elements;
//       const data = {
//         firstName: firstName.value,
//         lastName: lastName.value,
//       };
//       console.log(data);
//     });
//   };

//   return (
//     <form method='POST' id='my-form'>
//       <label>first name</label>
//       <input name='firstName' />
//       <label>last name</label>
//       <input name='lastName' />
//       <input type='submit' value='submit' />
//     </form>
//   );


/*React监听表单*/
// let [data, setData] = React.useState({
//     firstName: '',
//     secName: '',
//   });
//   console.log(data);
//   const change = (e) => {
//     // firstName = e.target.value;
//     // setFirst(firstName);  //与下面作用相同
//     // setFirst(e.target.value)
//     setData((prevdata) => {
//       return {
//         ...prevdata,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };

//   return (
//     <div>
//       <input name='firstName' onChange={change} />
//       <input name='secName' onChange={change} />
//     </div>
//   );

//react 提交表单
 // let [data, setData] = React.useState({
 //    firstName: '',
 //    secName: '',
 //    mail: '',
 //    isGood: false,
 //  });
 //  // console.log(data);
 //  const change = (e) => {
 //    // firstName = e.target.value;
 //    // setFirst(firstName);  //与下面作用相同
 //    // setFirst(e.target.value)
 //    const { name, type, value, checked } = e.target;
 //    setData((prevdata) => {
 //      return {
 //        ...prevdata,
 //        [name]: type === 'checkbox' ? checked : value,
 //      };
 //    });
 //  };
 //  const hansubmit = (e) => {
 //    e.preventDefault();
 //    console.log(data);
 //  };

 //  return (
 //    <form onSubmit={hansubmit} type='POST'>
 //      <input
 //        name='firstName'
 //        type='text'
 //        onChange={change}
 //        value={data.firstName}
 //      />
 //      <input
 //        name='secName'
 //        type='text'
 //        onChange={change}
 //        value={data.secName}
 //      />
 //      <label>mail:</label>
 //      <input name='mail' type='text' onChange={change} value={data.mail} />
 //      <input
 //        checked={data.isGood}
 //        type='checkbox'
 //        onChange={change}
 //        name='isGood'
 //      />
 //      <label>同意不</label>

 //      <button>dianji</button>
 //    </form>
 //  );


//react 页面跳转
// const [dataarr, setDataarr] = React.useState({});
//   let [count, setCount] = React.useState(1);
//   console.log(' render');
//   React.useEffect(() => {
//     fetch(`https://swapi.dev/api/people/${count}`)
//       .then((res) => res.json())
//       .then((data) => setDataarr(data));
//   }, [count]);
//   const handleClick = () => {
//     setCount((count) => count + 1);
//   };
//   return (
//     <div>
//       <pre>{JSON.stringify(dataarr, null, 2)}</pre>
//       <div>count is {count}</div>
//       <button onClick={handleClick}>add</button>
//     </div>
//   );


// };

export default Home;
