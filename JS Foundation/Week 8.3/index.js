// function main(){
//     fetch('https://sum-server.100xdevs.com/todos')
//     .then(async res=>{
//         const json=await res.json();
//         console.log(json.todos.length);
//         // const json= res.json();
//         // console.log(json);
//     })
// }


// async function main1(){
//     const response=await fetch('https://sum-server.100xdevs.com/todos')
//     const json=await response.json();
//     console.log(json.todos.length);     
// }
//post


// async function main(){
//     const response=await fetch('https://www.toptal.com/developers/postbin/1760261117587-5522551864851',{
//         method:"POST",
        //  body:{
        //     username:"ok",
        //     password:"ok"
        //  }
            // headers:{
            //     "Authorization":"Bearer123"
            // }
//     })
//     const json=await response.text();
//     // console.log(json.todos.length); 
//     console.log(json)    
// }

const axios=require('axios');

// async function main(){
//     const response=await axios.get('https://sum-server.100xdevs.com/todos')
//     console.log(response.data.todos.length);     
// }

// async function main(){
//     const response=await axios.delete('https://httpdump.app/dumps/8bd2c199-dcc4-4aee-b0a9-481df652f3d9',{
//         username:"okneerak",
//             password:"okdewkdjdklcjdkcewj",
// },{
//         Headers:{
//             "Authorization":"Bearer 1236738473284384"
//         }
//     })
//     console.log(response.data);     
// }




async function main(){
    const response=await axios(
{  url:"https://httpdump.app/dumps/4c0fbc77-5bf8-48c7-9fba-d42ef387dce8",
      method:"POST",
        headers:{
            "Authorization":"Bearer 1236738473284384"
        },
        data:{
            username:"hello"
        }
    },)
    console.log(response.data);     
}

main();