const loadCountries = () => {
    fetch('http://api.countrylayer.com/v2/all?access_key=b4487a01bf0409df56624a4edf125a5a')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countries => {
    console.log(countries);

    // for(const country of countries){
    //     console.log(country);
    // }

    const countriesDiv = document.getElementById('countries');
    // Alternative as Its an array
    countries.forEach(country => {
        //console.log(country.name);
        const div = document.createElement('div');
        div.classList.add('country');

        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);

        const image = document.createElement('img');
        image.src = country.flag;
        image.style.height = '150px';
        div.appendChild(image);

        // loop through to know the border
        const borders = country.borders;
        let borderList = [];
        for(const border of borders){
            borderList.push(border);
        }
        //console.log(borderList);

        // loop through language
        let singleLanguage = [];
        const languages = country.languages;
    
        for(let language of languages){
            //console.log(language.name);
            singleLanguage.push(language.name);
        }

        // old Method
        // for(let i=0; i < languages.length; i++){
        //     // console.log(i)
        //     //console.log(languages[i].name)
        //     singleLanguage.push(languages[i].name);
        // }

        const para = document.createElement('p');
        para.innerText = `
            Population: ${country.population}
            Currency Name: ${country.currencies[0].name}
            Currency symbol: ${country.currencies[0].symbol}
            Subregion: ${country.subregion}
            Borders: ${borderList}
            Languages: ${singleLanguage}
        `
        div.appendChild(para);
        //console.log(country.currencies[0].name);

        countriesDiv.appendChild(div);
        
    });
}