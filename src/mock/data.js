export const API_BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'

export const weekDays = [
    { id: 0, name: 'D', selected: false },
    { id: 1, name: 'S', selected: false },
    { id: 2, name: 'T', selected: false },
    { id: 3, name: 'Q', selected: false },
    { id: 4, name: 'Q', selected: false },
    { id: 5, name: 'S', selected: false },
    { id: 6, name: 'S', selected: false },
]

export const config = (user) => {
    return {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
}