const header = document.querySelector('header');
const section =  document.querySelector('section');

let requestUrl = './superHeroes.json';

let request =  new XMLHttpRequest();

request.open('GET', requestUrl);

request.responseType = 'json';

request.send();

request.onload =function () {
    let superheroes = request.response;
    console.log(superheroes.squadName);
    populateHeader(superheroes);
    showHeroes(superheroes);
}

function populateHeader(jsonObj) {
    let myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    let para = document.createElement('p');
    para.textContent = `Hometown: ${jsonObj['homeTown']}`;
    header.appendChild(para);
}

function showHeroes(jsonObj){
    const heroes = jsonObj['members'];

    for (let i=0; i<heroes.length; i++) {
        let myArticle = document.createElement('article');
        let myH2 = document.createElement('h2');
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: '+heroes[i].secretIdentity;
        myPara2.textContent = 'Age: '+ heroes[i].age;
        myPara3.textContent = 'Superpowers: ';

        const superpowers = heroes[i].powers;
        for(let j=0; j<superpowers.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = superpowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
};