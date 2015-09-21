// Custom Helper
Handlebars.registerHelper ("KorGrade", function (Kor) {
   if (Kor >= 90) {
       return "A" ;
   }
   else if (Kor >= 80 && Kor < 90) {
       return "B" ;
   }
   else if (Kor >= 70 && Kor < 80) {
       return "C" ;
   }
   else {
       return "D" ;
   }
});

$(function () {
var srcCustomHelper = $('#custom-helper-template').html();
var tplCustomHelper = Handlebars.compile(srcCustomHelper);
var ctxCustomHelper = {Title:"Custom Helper Example", Name:"Handle Kim", Kor:85};
$('body').append(tplCustomHelper(ctxCustomHelper));
});

// Custom block helper
Handlebars.registerHelper("cbhScore", function(objBlockHelper, Options){
	var totalScore = "";
	
	for(var i=objBlockHelper.length - 1 ; i >= 0 ; i--){
		objBlockHelper[i].Score = objBlockHelper[i].Score.reduce(function (prev, cur){
			return prev+cur;
		});
		totalScore += Options.fn(objBlockHelper[i]);
	}
	return totalScore;
});

$(function () {
var srcBlockHelper = $('#block-helper-template').html();
var tplBlockHelper = Handlebars.compile(srcBlockHelper);
var ctxBlockHelper = [{Name:"김핸들", Score:[20,40,50,60]},
					{Name:"이바즈", Score:[43,37,59,68]}];
$('body').append(tplBlockHelper(ctxBlockHelper));
});
