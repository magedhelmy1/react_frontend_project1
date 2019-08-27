export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject, //create clone of old object
        ...updatedProperties //replace the objects that have the same position with the values/keys from the new method
    }
};

//Take in the old object, and updates it by adding the new parameters to it.