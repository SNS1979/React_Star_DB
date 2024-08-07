import numberVisual from '../js/string-number';

export default class SwapiService {
    async getResource(url){
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}` +
             `, received ${res.status}`)
        }
        
        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getResource(`https://swapi.dev/api/people/`);
        //console.log(res.results);
        
        return res.results.map((item) => {
            let newItem = {...item};
            newItem.id = this._extractId(item);
            newItem.srcImg = `https://starwars-visualguide.com/assets/img/characters/${newItem.id}.jpg`
            return newItem
        });
    }

    getAllNamePeople = async () => {
        const listPeople = await this.getAllPeople();
        return listPeople.map(this._transformDataPersonInName)
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`https://swapi.dev/api/planets/`)
        return res.results.map(this._transformDataPlanet);
    }

    getAllNamePlanets = async () => {
        const listPeople = await this.getAllPlanets();
        return listPeople.map(this._transformDataPlanetInName)
    }

    getAllStarships = async () => {
        const res = await this.getResource(`https://swapi.dev/api/starships/`)
        return res.results.map(this._transformDataStarship);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`https://swapi.dev/api/people/${id}`);
        person.id = id;
        person.srcImg = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
        return person;
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`https://swapi.dev/api/planets/${id}`);
        planet.id = this._extractId(planet);
        planet.srcImg = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
        return planet;
    }

    getStarship = async (id) =>{
        const starship = await this.getResource(`https://swapi.dev/api/starships/${id}`);
        starship.id = id;
        starship.srcImg = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
        return starship;
    }

    


    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        const d = item.url.match(idRegExp)[1];
        return d;
    }

    _transformDataPersonInName = (people) => {
        return {
            id: this._extractId(people),
            name: people.name,
        }
    }

    _transformDataPlanetInName = (planet) => {
        return {
            id: planet.id,
            name: planet.name,
        }
    }

    _transformDataPlanet = (planet) => {
            const pop = planet.population === 'unknown' ? planet.population : numberVisual(planet.population);
            let id = this._extractId(planet);
            return {
            id,
            name: planet.name,
            population: pop,
            rotationPlanet: planet.rotation_period,
            diametr: numberVisual(planet.diameter),
            srcImg: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
        }
    }

    _transformDataPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.berthYear,
            eyeColor: person.eyeColor
        }
    }

    _transformDataStarship = (starship) => {
        let id = this._extractId(starship);
        return {
            ...starship,
            id,
            srcImg: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`

        }
    }

}