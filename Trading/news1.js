// my api key :- 83f66c32e36443b1aa2d8fb6814ecaae
// my api key :- 96420dcdf7ca4ab9acccb40320de0f43

let fnews = document.getElementById('fnews');

const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4dbc17e007ab436fb66416009dfb59a8',true);
//xhr.getAllResponseHeaders('Content-type', 'application/json');

xhr.onload = function () {
    if(this.status === 200){

        let json= JSON.parse(this.responseText);
        let articles=json.articles;
       
        let newsHtml = "";
        articles.forEach(function(element,index)  {
            let news = `<div class="card" id='ak'>
    <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="#collapse${index}">
                ${element['title']}
            </button>
        </h2>
    </div>

    <div id="collapse${index}" class="collapse show" aria-labelledby="headingheading${index}" data-parent="#fnews">
        <div class="card-body">
           ${element['description']} <a href="${element['url']}" target='_blank'>read more here</a>
        </div>
    </div>
</div>`
newsHtml+=news;
 
    });
    fnews.innerHTML=newsHtml;
}
    else{
        console.log("Some error occured")
        
        
    }
    
}
xhr.send();

















// function getData(){
    
//     console.log('started')
//     url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=";
//     fetch(url).then((response)=>{
//         let resp = response.json();
//         return resp;
//     }).then((data)=>{
        



       
        
// let articles = data.articles;
//         let newsHtml = "";
//         articles.forEach(function(element,index)  {
//             let news = `<div class="card" id='ak'>
//     <div class="card-header" id="heading${index}">
//         <h2 class="mb-0">
//             <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="#collapse${index}">
//                 ${element['title']}
//             </button>
//         </h2>
//     </div>

//     <div id="collapse${index}" class="collapse show" aria-labelledby="headingheading${index}" data-parent="#fnews">
//         <div class="card-body">
//            ${element['description']} <a href="${element['url']}" target='_blank'>read more here</a>
//         </div>
//     </div>
// </div>`
// newsHtml+=news;
 
//     });
//     fnews.innerHTML=newsHtml;







//     })





    
// }

// getData()