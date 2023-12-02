
function fetchData1(){
fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json')
.then((res)=>{
    return res.json()
}).then((res)=>{
     return (res.inr)
    
    
})
}
// setTimeout(()=>{
//     console.log(currentKey)]

// },10000)


async function fetchData(currency) {
    try {
      const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
      const data = await response.json();
      const ans = data[currency];
      const currentKey = Object.keys(ans);
      console.log(currentKey);
      // Further actions with currentKey or other logic can be placed here
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
//   fetchData('chz');

const temp= fetchData1;
  
  
  