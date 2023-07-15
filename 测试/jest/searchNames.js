import * as services from './services'

const searchNames = (term) => {
    const matches = services.getNames().filter((names) => {
        return names.includes(term)
    })

    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

const functionNotTested = (term) => {
    return `Hello ${term}`
}

export default searchNames;