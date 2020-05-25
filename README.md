## MH

The end-goal of this project is to make an app for Monster Hunter: World players.
The app could recommend builds for players based on what they are hunting and what weapons they are using.

## Current status
* Working on a means to sort builds
* Builds can be sorted incremently using arrow buttons next to each build; changes made are not saved
* Default sorted order is most recently made/edited builds first

## End Goal
* Provide equipment options that would best protect against monsters
* Provide skill suggestions based on monsters
* Limit suggestions based on Hunter Rank

## TODO
[ ] create mongo functions to update buildNo with proper values
[ ] update build page so most recently updated build is on top
[ ] update database buildNo whenever user reorganizes a build

## Builds current status
When user logs in, userContext gets the buildCount but not the actual builds. Builds are filled into an array upon going to the builds page.
When A new build is made, it gets set to the front of the array and it is given a buildNo equal to buildCount+1. When a build is updated, it also gets a new buildNo equal to buildCount+1. Both instances also increment buildCount.

* Issue: buildCount is always initialized to the correct value but buildNo might be larger so builds could end up out of order.
* Plan to resolve: After getting builds, set all their BuildNo to buildCount - arrayIndex

* Issue: Updated builds do not automatically move to the top of the list
* Plan to resolve: remove build from build array and then reset it to the front

* Issue: Creating a new build before going to build page prevents older builds from loading in
* Plan to resolve: remove the length check when entering builds and only check if an update is needed
* Resolved

* Issue: manual edits to list sort are not saved
* Plan to resolve: On switch, update buildNo of builds by swapping them

## Resources
* https://docs.mhw-db.com/


# Notes for use
* for specific searches, follow with ?q={"element":"value"}
* Ex: get armor with rarity 1: https://mhw-db.com/armor?q={"rarity":"1"}