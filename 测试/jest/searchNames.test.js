import searchNames from "./searchNames"
import { getNames } from "./services"

// jest.mock('./services', () => ({
//     getNames: jest.fn(() => ['John', 'Paul', 'George', 'Ringo'])
// }))

jest.mock('./services', () => ({
    getNames: jest.fn()
}))

test('should return search results', () => {
    // given
    const keyword = 'Frank'
    getNames.mockImplementation(() => [])
    // when
    const result = searchNames(keyword)
    // then
    expect(result).toEqual([])
})

test('should return target result when found search', () => {
    const keyword = 'John'
    getNames.mockImplementation(() => ['John', 'Paul', 'George', 'Ringo'])

    const result = searchNames(keyword)

    expect(result).toEqual(['John'])
})

test('should not return more than 3 matches', () => {
    const keyword = 'John'
    getNames.mockImplementation(() => ['John', 'John1', 'John2', 'John3', 'Paul', 'George', 'Ringo'])

    const result = searchNames(keyword)

    expect(result).toHaveLength(3)
})

test('should handle null or undefined as input', () => {
    getNames.mockImplementation(() => [])

    expect(searchNames(undefined)).toEqual([])
    expect(searchNames(null)).toEqual([])
})

test('should return case sensitive', () => {
    getNames.mockImplementation(() => ['John', 'Paul', 'George', 'Ringo'])
    expect(searchNames('john')).toEqual([])
})