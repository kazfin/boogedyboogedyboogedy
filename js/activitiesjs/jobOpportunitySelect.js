//Author(s): Ethan Scott//

//interior designer//
document.getElementById("int-designer").addEventListener("click", function() {
	console.log("int-designer clicked");
	Job.push("int-designer-select");
	hasJob = false;
	Logs = "I looked into becoming an interior designer.";
	localStorage.setItem("Job", JSON.stringify(Job));
	localStorage.setItem("hasJob", hasJob);
	window.location.href = "./job-opportunity.html"; //redirects player to the application page they selected//
});