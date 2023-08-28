// fetch all the events from the api
export const fetchEvents = async () => {
    const data = await fetch("https://gdscdev.vercel.app/api")
        .then(res => res.json())
    
    return data.content.data
}

// fetch a single event based on id
export const fetchEventDetail = async ({ queryKey }) => {
    const [_key, id] = queryKey

    const data = await fetch("https://gdscdev.vercel.app/api")
        .then(res => res.json())

    const eventData = data.content.data.find(i=> i.id === +id)
    console.log(eventData);
    return eventData
}


// format date to dd/mm/yyyy format
export function extractDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = {day: '2-digit',  month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}