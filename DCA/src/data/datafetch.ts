export async function getcatsphrase(){
    try {
        const allcatspeak = await fetch('https://catfact.ninja/fact').then(res => res.json())
        return allcatspeak
    } catch (error) {
        
    }
}
export async function getcatsimages(){
    try {
        const allcatsooklike = await fetch('https://cataas.com/cat/says/').then(res => res.json())
        return allcatsooklike
    } catch (error) {
        
    }
}