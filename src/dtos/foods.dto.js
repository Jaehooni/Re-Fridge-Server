export const foodMakingResponseDTO = (fridgeName, foodName) => {
    return {"fridgeName": fridgeName, "food": foodName};
}

export const foodListResponseDTO = (foodList) => {
    const result = [];
    foodList.forEach(fridge => {
        result.push({
            "id": fridge.id,
            "name": fridge.name
        });
    })

    return {"foodList": result};
}

export const foodDeleteResponseDTO = (foodName) => {
    return {"removedFoodName": foodName};
}

export const foodRenameResponseDTO = (foodName) => {

    return {"newFoodName": foodName};
}

// export const memoMakingResponseDTO = (foodName, content) => {
//     return {"food": foodName, "memo": content};
// }


