## MH

The end-goal of this project is to make an app for Monster Hunter: World players.
The app could recommend builds for players based on what they are hunting and what weapons they are using.

## Current status
* Working on form submissions
* Narrowing responses to more reasonable levels
* Working around missing/limited data from the API

## End Goal
* Provide equipment options that would best protect against monsters
* Provide skill suggestions based on monsters
* Limit suggestions based on Hunter Rank

## TODO
[x] Create a database that tracks monster ailments, API ids for skills
[ ] Track skill levels.
[ ] Write Heroku deploy scripts for database
## Resources
* https://docs.mhw-db.com/

## Structure
<index>
	<App>
		<RankTabs>
			<SearchState Hunter rank>
                <Form>
                    <MR?>
                    <HR?>
                    <MonsterSelector>
                </Form>
                <Recommendation for each skill>
                    <selectArmor forEach armor>
                </Recommendation for each skill>
                <ArmorDisplay>
		</RankTabs>
	</App>
</index>
# Notes for use
* for specific searches, follow with ?q={"element":"value"}
* Ex: get armor with rarity 1: https://mhw-db.com/armor?q={"rarity":"1"}