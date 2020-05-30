## MH

The end-goal of this project is to make an app for Monster Hunter: World players.
The app could recommend builds for players based on what they are hunting and what weapons they are using.

## Current status
* Attempting to delete builds

## End Goal
* Provide equipment options that would best protect against monsters
* Provide skill suggestions based on monsters
* Limit suggestions based on Hunter Rank

## Pages
# /
* User can search for equipment based on their hunter rank and the monsters they are hunting
* User can save their created builds (if logged in)

# /builds
* Displays user builds
* User can reorganize build order (default order is newest first)
* User can select a build to update or delete

# /login
* Log into your account

# /signup
* Create an account
* Username must be unique


## Home page layout
* Select whether you are hunting low, high, or master rank monsters. 
* Select your hunter/master rank.
* Select the monster you are hunting. Options are determined by whether you are searching low, high, or master rank and what hunter/master rank you are
* Click submit to display a dropdown menu for recommended skills
* Select the skill you want to use. A list of equipment with that skill will display. List is based on your hunter/master rank
* Select the equipment you want to use. It will appear on the equipment display.
* Save your build (if logged in) by clicking the save build button.
* Click reset build to reset the build


## Resources
* https://docs.mhw-db.com/


# Notes for use
* for specific searches, follow with ?q={"element":"value"}
* Ex: get armor with rarity 1: https://mhw-db.com/armor?q={"rarity":"1"}