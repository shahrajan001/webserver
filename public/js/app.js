console.log('Client side JS file loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data)=> {
//         console.log(data)

//     })

// })

fetch('http://localhost:3000/weather?address=newyork').then((response) => {
    response.json().then((data)=> {
    if(data.error){
        console.log('Error')
    }
    else{
        console.log(data.Time)
        console.log(data.weather)
    }
    })
})

const weatherForm = document.querySelector('form')

weatherForm.addEventListner('submit',()=>{
    console.log('testing')
})