async function getCountry(){
    const resp = await fetch ('https://restcountries.eu/rest/v2/all');
    const country = await resp.json();
    const tbody = document.querySelector('#country>tbody')
    tbody.innerHTML="";
    console.log(country)
   
    //const table = document.getElementById('count');
    //console.log(country)
    for (let count of country){
        const tr =document.createElement('tr');

        const tdCountry = document.createElement('td');
        tdCountry.innerText = count.name;

        const tdPopulation = document.createElement('td');
        tdPopulation.innerText = count.population;

        const tdFlag = document.createElement('td');
        tdCountry.innerHTML = count.flag;


        const tdTimezones = document.createElement('td');
        tdTimezones.innerText =  count.timezones;

       



        tr.append(tdCountry, tdPopulation, tdFlag, tdTimezones );
        tbody.appendChild(tr)
        console.log(count.name);

        

    }
}
getCountry();
