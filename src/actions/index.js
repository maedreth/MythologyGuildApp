import axios from 'axios';

export function fetchToons() {
    const url = "https://us.api.battle.net/wow/guild/Wyrmrest%20Accord/Mythology?fields=members&locale=en_US&apikey=6grynkqadxeapkwjybf38p7vr4vpvx62";
    
    const guildRosterPromise = axios.get(url).then((response) => {
        return response.data.members.map((member) => {
            // let gearScore = fetchMemberGearscore(member.character.name);
            return { name: member.character.name, ilvl: null };
        });
    });
    console.log("guildRosterPromise", guildRosterPromise);

    return {
        type: "FETCH_TOONS",
        payload: guildRosterPromise
    };
}

