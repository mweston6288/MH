import React from "react";

// Stores the currently selected armor for users
const ArmorContext = React.createContext({
    head: null,
    chest: null,
    waist: null,
    gloves: null,
    legs: null
});

export default ArmorContext;
