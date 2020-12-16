
const generateRandoNumber = (num) =>{
 return  Math.floor(Math.random() * num);
};

const  collectionmessage ={
    sigsignInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
};

const generarmensaje = () =>{
    let arr =[];
    for (prop in collectionmessage) {
    const num = generateRandoNumber(collectionmessage[prop].length);
    arr.push(`Your sign right now is a "${collectionmessage[prop][num]}" `); 
    }
    const mess=  arr.join('\n');
    console.log(mess);
};
generarmensaje();