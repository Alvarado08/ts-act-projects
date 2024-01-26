export function runCommands() {
	// TODO: Goal of the game is for the player to still have both Food and Water after Day passes 7

	//? Catches
	// don't use the string primitive type. Use string literals instead
	// You can still use number if you want for numeric values

	//* 4 main states:
	// 1. Available resource(Food | Water): Food or Water available to resupply. Initially with no value
	// 2. Day(number): Current day of travel. Initially with a value of 1
	// 3. Food(number): Number of food units left. Initially with a value of 5
	// 4. Water(number): Number of water units left. Initially with a value of 5

	//? Continuously generate a random number between 1 and 6 to simulate a dice roll for a new day
	//? After the dice roll actions are completed, decrease both food and water by 1 

	//* Once the Day state passes 7 (the player has lasted 7 days with sufficient supplies), return true
	//! If either is 0 then return false

	//* Limit of 7 days
	// Random number between 1 and 6
	//* State 1 and 2
	// After each roll, set a new state
	// State 1(Food): the next roll, if and only between 3-6, will determine the resupply amount of Food (add amount to current supply units)
	// State 2(Water): the next roll, if and only between 3-6, will determine the resupply amount of Water (add amount to current supply units)
	//* State 3-6
	// Evens between 3-6: if current state is not 1 or 2, set state to 1 (Food)
	// Odds between 3-6: if current state is not 1 or 2, set state to 2 (Water)
	// Current state 1 or 2: increment current state supply by amount of roll
	//! If roll is not 3-6, do not resupply amount

	let resourceState: 1 | 2 | undefined = undefined;
	let food: number = 5;
	let water: number = 5;

	for(let i = 1; i <= 7; i++){
		let randomDayGenerator: number = Math.floor(Math.random() * 6) + 1;

		if(randomDayGenerator === 1){
			resourceState = 1;
		}else if(randomDayGenerator === 2){
			resourceState = 2;
		}else if(randomDayGenerator >= 3 && resourceState === undefined){
			resourceState = randomDayGenerator % 2 === 0 ? 1 : 2;
		}else if(randomDayGenerator >= 3 && resourceState === 1){
			food += randomDayGenerator;
			resourceState = undefined;
		}else if(randomDayGenerator >= 3 && resourceState === 2){
			water += randomDayGenerator;
			resourceState = undefined;
		}

		food--;
		water--;

		if(food === 0 || water === 0){
			return false;
		}
	}
	return true;
}