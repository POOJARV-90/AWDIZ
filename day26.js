

// setTimeout(()=> {console.log("here after 5sec")},5000)

// setInterval(()=>{console.log("printing after every 2sec")},2000)


function plantnauturing() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('growing period');
        }, 5000);

        
     
    });
}

async function plantgrowing() {
    console.log('seed sowing');
    const result = await plantnauturing();
    console.log(result,"- through photosynthesis")
    console.log("fully grown plant :)")
    // Expected output: "resolved"
}
plantgrowing();

