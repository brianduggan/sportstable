$(function(){

	function Team (name, wins, draws, losses, gf, ga){
		this.constructor.all.push(this);
		this.name = name;
		this.id = Team.count;
		Team.count++;
		this.wins = wins;
		this.draws = draws;
		this.losses = losses;
		this.games = this.wins + this.draws + this.losses;
		this.points = ( ( 3 * this.wins) + (this.draws) );
		this.gf = gf;
		this.ga = ga;
		this.list = function(){
			return "<option value='"+this.id+"'>"+this.name+"</option>"; //<option value="arsenal">Arsenal FC</option>
		};
		this.add2list = function(){
			$("select#team1").append(this.list);
		};
		this.add2list();
		this.list2 = function(){
			return "<option value='"+this.id+"'>"+this.name+"</option>"; //<option value="arsenal">Arsenal FC</option>
		};
		this.add2list2 = function(){
			$("select#team2").append(this.list2);
		};
		this.add2list2();
		this.diff = parseInt(gf) - parseInt(ga);
		this.el = function(){
			return "<tr><td>" + this.name + "</td><td>" + this.games + "</td><td>" + this.wins + "</td><td>" + this.draws + "</td><td>" + this.losses + "</td><td>" + this.points + "</td><td>" + this.gf + "</td><td>" + this.ga + "</td><td>" + this.diff +"</td></tr>";
		};
		this.display = function(){
			$('table tbody').append(this.el());
		};
		$('tr:odd').css("background-color", "#fff");
	}

	Team.count = 0;

	$("#simpleTable").stupidtable();
	Team.all = [];
	var arsenal = new Team("Arsenal", 21, 7, 6, 66, 33);
	var astonvilla = new Team("Aston Villa", 9, 8, 18, 29, 50);
	var burnley = new Team ("Burnley", 5, 11, 19, 26, 53);
	var chelsea = new Team ("Chelsea", 25, 8, 2, 69, 27);
	var crystal = new Team ("Crystal Palace", 11, 9, 15, 42, 48);
	var everton = new Team ("Everton", 11, 11, 13, 46, 46);
	var hull = new Team ("Hull City", 8, 10, 17, 33, 48);
	var leicester = new Team ("Leicester City", 9, 7, 19, 39, 54);
	var liverpool = new Team ("Liverpool", 18, 7, 10, 49, 38);
	var mancity = new Team ("Manchester City", 21, 7, 7, 71, 36);
	var manu = new Team ("Manchester United", 19, 8, 8, 59, 35);
	var newcastle = new Team ("Newcastle United", 9, 8, 18, 36, 60);
	var qpr = new Team ("Queens Park Rangers", 7, 6, 22, 39, 61);
	var southampton = new Team ("Southampton", 17, 6, 12, 48, 28);
	var stoke = new Team ("Stoke City", 13, 8, 14, 39, 44);
	var sunderland = new Team ("Sunderland", 6, 15, 13, 28, 50);
	var swansea = new Team ("Swansea City", 15, 8, 12, 43, 44);
	var tottenham = new Team ("Tottenham Hotspur", 17, 7, 11, 55, 50);
	var wba = new Team ("West Bromwich Albion", 10, 10, 15, 33, 46);
	var westham = new Team ("West Ham United", 12, 11, 12, 43, 42);
	
	arsenal.display();
	astonvilla.display();
	burnley.display();
	chelsea.display();
	crystal.display();
	everton.display();
	hull.display();
	leicester.display();
	liverpool.display();
	mancity.display();
	manu.display();
	newcastle.display();
	qpr.display();
	southampton.display();
	stoke.display();
	sunderland.display();
	swansea.display();
	tottenham.display();
	wba.display();
	westham.display();


});