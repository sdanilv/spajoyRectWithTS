import axios from "axios";

export const defineUserTown = async () => {
    const geolocation: any = await axios.get("https://api.sypexgeo.net/json");
    switch  (geolocation.data.region.name_ru){
        case "Запорожье":
            return "Запоріжжя";
        case "Одесса":
            return "Одеса";
        case "Киев":
            return "Київ"
    }
    return "empty"
};
