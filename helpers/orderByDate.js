export const orderStoriesByDate = (stories = []) => {
    return stories.sort((firstStorie, secondStorie) => new Date(secondStorie.date) - new Date(firstStorie.date) )
}
