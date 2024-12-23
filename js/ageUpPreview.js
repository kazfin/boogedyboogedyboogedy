//Author(s): Ethan Scott//

function ifStatIsHigherLower(current, future, name) { //finds if difference between the current and future stats are positive or negative//
  let difference = future - current;
  if (difference > 0) {
    return "+ " + difference;
  } else if (difference < 0) {
    return "- " + Math.abs(difference);
  } else {
    return "+- 0";
  }
}

function futureMoneyCalculator() {
	let moneyThusFar = Money;
	if (Salary != 0) {
		if (Intellect <= 20) { //see ageUp.js for more info on this//
			moneyThusFar += (Salary / 100) * 20;
		} else if (Intellect >= 80) {
			moneyThusFar += (Salary / 100) * 40;
		} else if (Intellect > 20 && Intellect < 80) {
			moneyThusFar += (Salary / 100) * 30;
		}
	}
	if (Age >= 7 && Age <= 14) {
		moneyThusFar += Age * 2;
	}
	console.log("i can't believe that worked");
	return "Money: " + moneyThusFar + " | " + ifStatIsHigherLower(Money, moneyThusFar) + " (Salary = $" + Salary + ")";
}

function banana(bonanza) {
	let joyUpcoming = Joy;
	let healthUpcoming = Health;
	let intellectUpcoming = Intellect;
	let looksUpcoming = Looks;
	let karmaUpcoming = Karma;
	let evalityUpcoming = Evality;
	//uses the upcoming variation of stats so that changes are correctly compounded//
	if (evalityUpcoming >= 85) { //if player is evil//
		karmaUpcoming / 2;
		joyUpcoming += 5;
	} else if (evalityUpcoming <= 10 && (Age++) >= 12) { //if player is a saint (it's easier to be a saint in your formative ages so you don't get benifits for that)//
		karmaUpcoming * 1.2;
		joyUpcoming += 10;
	}
	if (healthUpcoming <= 20) { //if player is unhealthy//
		joyUpcoming -= 10;
	} else if (healthUpcoming >= 85) { //if player is really healthy//
		joyUpcoming += 10;
	}
	if (joyUpcoming <= 15) { //being unhappy sacrafices other stats//
		healthUpcoming -= 5;
		intellectUpcoming -= 5;
		looksUpcoming -= 10;
	} else if (joyUpcoming >= 80) { //being happy gives more motivation and confidence//
		healthUpcoming += 8;
		intellectUpcoming += 5;
		looksUpcoming += 8;
	}
	if (looksUpcoming <= 20) { //if player is ugly//
		joyUpcoming -= 5;
	} else if (looksUpcoming >= 85) { //if player is attractive//
		joyUpcoming += 8;
	}
	if (Money >= 1,000,000) { //if player has more than $1,000,000 in the bank//
		joyUpcoming += 5;
	} else if (Money >= 100,000,000) { //if player is RICH (has more than $100,000,000 in the bank//
		joyUpcoming += 8;
		karmaUpcoming -= 4;
	} else if (Money < 0) { //on the inverse, if player is in debt//
		joyUpcoming -= 5;
	} else if (Money <= -200,000) { //if player is in generational debt//
		joyUpcoming -= 15;
		karmaUpcoming += 2;
	}
if (joyUpcoming > 100) {
	joyUpcoming = 100;
} else if (joyUpcoming < 0) {
	joyUpcoming = 0;
}
if (healthUpcoming > 100) {
	healthUpcoming = 100;
} else if (healthUpcoming < 0) {
	healthUpcoming = 0;
}
if (intellectUpcoming > 100) {
	intellectUpcoming = 100;
} else if (intellectUpcoming < 0) {
	intellectUpcoming = 0;
}
if (looksUpcoming > 100) {
	looksUpcoming = 100;
} else if (looksUpcoming < 0) {
	looksUpcoming = 0;
}
if (karmaUpcoming > 100) {
	karmaUpcoming = 100;
} else if (karmaUpcoming < 1) { //karma can't be 0 so as to not make anything impossible due to your karma level//
	karmaUpcoming = 1;
}
if (evalityUpcoming > 100) {
	evalityUpcoming = 100;
} else if (evalityUpcoming < 0) {
	evalityUpcoming = 0;
}
if (bonanza === "Joy") {
	return "Joy: " + joyUpcoming + " | " + ifStatIsHigherLower(Joy, joyUpcoming, "Joy");
} else if (bonanza === "Health") {
	return "Health: " + healthUpcoming + " | " + ifStatIsHigherLower(Health, healthUpcoming, "Health");
} else if (bonanza === "Intellect") {
	return "Intellect: " + intellectUpcoming + " | " + ifStatIsHigherLower(Intellect, intellectUpcoming, "Intellect");
} else if (bonanza === "Looks") {
	return "Looks: " + looksUpcoming + " | " + ifStatIsHigherLower(Looks, looksUpcoming, "Looks");
} else if (bonanza === "Karma") {
	return "Karma: " + karmaUpcoming + " | " + ifStatIsHigherLower(Karma, karmaUpcoming, "Karma");
} else if (bonanza === "Evality") {
	return "Evality: " + evalityUpcoming + " | " + ifStatIsHigherLower(Evality, evalityUpcoming, "Evality");
}
}

document.getElementById("ageText").innerHTML = "Age: " + ++Age + " | " + ifStatIsHigherLower(Age, ++Age);
document.getElementById("moneyText").innerHTML = futureMoneyCalculator();
document.getElementById("joyText").innerHTML = banana("Joy");
document.getElementById("healthText").innerHTML = banana("Health");
document.getElementById("intellectText").innerHTML = banana("Intellect");
document.getElementById("looksText").innerHTML = banana("Looks");