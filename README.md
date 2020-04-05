## MH

The end-goal of this project is to make an app for Monster Hunter: World players.
The app could recommend builds for players based on what they are hunting and what weapons they are using.

## Current status
Attempting to implement very basic front-end/back-end communication right now.

## End Goal
* Provide equipment options that would best protect against monsters
* Provide skill sggestions based on monsters
* Limit suggestions based on Hunter Rank

## TODO
* Current: Create api channel
* mhw-db does not provide search armor by rarity; will need to create feature for that

## Resources
* https://docs.mhw-db.com/

# Notes for use
* for specific searches, follow with ?q={"element":"value"}
* Ex: get armor with rarity 1: https://mhw-db.com/armor?q={"rarity":"1"}