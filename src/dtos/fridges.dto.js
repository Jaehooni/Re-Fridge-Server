export const fridgeMakingResponseDTO = (user, fridgeName) => {
    return {"owner": user[0].name, "fridgeName": fridgeName};
}

export const fridgeListResponseDTO = (fridgeList) => {
    const result = [];
    fridgeList.forEach(fridge => {
        result.push({
            "id": fridge.id,
            "name": fridge.name
        });
    })

    return {"fridgeList": result};
}

export const fridgeDeleteResponseDTO = (removedFridgeName) => {

    return {"removedFridgeName": removedFridgeName};
}