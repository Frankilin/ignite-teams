import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PlayersGetByGroup } from "./playersGetByGroup";


export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
 try{

    const storedPlayes = await PlayersGetByGroup(group);

    const playerAlreadyExists = storedPlayes.some((player) => player.name === newPlayer.name)
    
    if(playerAlreadyExists){
        throw new AppError('Essa pessoa já está adicionada em um grupo')
    }

    const storage = JSON.stringify([...storedPlayes, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)

 }catch(error){
    throw error
 }
}