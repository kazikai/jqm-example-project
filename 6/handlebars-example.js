$(function () {
var source = $( '#test1-template' ).html();
var template = Handlebars.compile( source);

var context = {title:"타이틀","body":"바디"};

$('body').append(template(context));

var srcStudent = $('#student-template').html();
var tplStudent = Handlebars.compile(srcStudent);
var ctxStudent = {FirstName:"핸들",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""};
$('body').append(tplStudent(ctxStudent));

// Group Example
var srcStudentGroup = $('#student-group-template').html();
var tplStudentGroup = Handlebars.compile(srcStudentGroup);
var ctxStudentGroup = {Title:"Group Example", Group:"남자",
							man: [ {FirstName:"핸들",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""} ]};
$('body').append(tplStudentGroup(ctxStudentGroup));

// No-named array Example
var srcStudentNoNamedArr = $('#student-no-named-array-template').html();
var tplStudentNoNamedArr = Handlebars.compile(srcStudentNoNamedArr);
var ctxStudentNoNamedArr = [
	{FirstName:"핸들",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
	{FirstName:"노핸",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
	{FirstName:"바즈",LastName:"이",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
	{FirstName:"수염",LastName:"장",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""}
];
$('body').append(tplStudentNoNamedArr(ctxStudentNoNamedArr));

// Named Array Example
var srcStudentArr = $('#student-array-template').html();
var tplStudentArr = Handlebars.compile(srcStudentArr);
var ctxStudentArr = {Title:"Named Array Example",
	student:[
		{FirstName:"핸들",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
		{FirstName:"노핸",LastName:"김",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
		{FirstName:"바즈",LastName:"이",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""},
		{FirstName:"수염",LastName:"장",Korean:"",English:"",Math:"",Total:"",Average:"",Email:"",Mobile:""}]
};
$('body').append(tplStudentArr(ctxStudentArr));

// Named Array Example
var srcChildAttrArr = $('#child-attr-template').html();
var tplChildAttrArr = Handlebars.compile(srcChildAttrArr);
var ctxChildAttrArr = {Title:"Child Attribute Example",
	Student:{FirstName:"핸들",LastName:"김"}
};
$('body').append(tplChildAttrArr(ctxChildAttrArr));

// Parent attribute Example
var srcParentAttrArr = $('#parent-attr-template').html();
var tplParentAttrArr = Handlebars.compile(srcParentAttrArr);
var ctxParentAttrArr = {Title:"Parent Attribute", Group:"학생",
	student:[
		{FirstName:"핸들",LastName:"김"},
		{FirstName:"노핸",LastName:"김"},
		{FirstName:"바즈",LastName:"이"},
		{FirstName:"수염",LastName:"장"}]
};
$('body').append(tplParentAttrArr(ctxParentAttrArr));

// {{{, }}} tag Example
var srcHTMLEscape = $('#html-escape-template').html();
var tplHTMLEscape = Handlebars.compile(srcHTMLEscape);
var ctxHTMLEscape = {Title:"HTML Escape",Body:"<p>이 예제는 HTML escape 문자&lt;p&gt;를 보여주는 예제입니다.</p>",
					Escape:"{{Body}}",Unescape:"{{{Body}}}"};
$('body').append(tplHTMLEscape(ctxHTMLEscape));

// Helper #each Example 1
var srcHelperEach1 = $('#helper-each1-template').html();
var tplHelperEach1 = Handlebars.compile(srcHelperEach1);
var ctxHelperEach1 = {Title:"Helper #each Example 1",
	Student:[
		{FirstName:"핸들",LastName:"김"},
		{FirstName:"노핸",LastName:"김"},
		{FirstName:"바즈",LastName:"이"},
		{FirstName:"수염",LastName:"장"}]
};
$('body').append(tplHelperEach1(ctxHelperEach1));

// Helper #each Example 2
var srcHelperEach2 = $('#helper-each2-template').html();
var tplHelperEach2 = Handlebars.compile(srcHelperEach2);
var ctxHelperEach2 = {Title:"Helper #each Example 2",
	Student:["핸들","노핸","바즈","수염"]
};
$('body').append(tplHelperEach2(ctxHelperEach2));

// Helper #each Example 3
var srcHelperEach3 = $('#helper-each3-template').html();
var tplHelperEach3 = Handlebars.compile(srcHelperEach3);
var ctxHelperEach3 = [
		{FirstName:"핸들",LastName:"김"},
		{FirstName:"노핸",LastName:"김"},
		{FirstName:"바즈",LastName:"이"},
		{FirstName:"수염",LastName:"장"}];
$('body').append(tplHelperEach3(ctxHelperEach3));

// Helper #if Example 1
var srcHelperIf1 = $('#helper-if1-template').html();
var tplHelperIf1 = Handlebars.compile(srcHelperIf1);
var ctxHelperIf1 = {Title:"Helper #if Example 1", FirstName:"핸들", LastName:"김"};
$('body').append(tplHelperIf1(ctxHelperIf1));

// Helper #if Example 2
var srcHelperIf2 = $('#helper-if2-template').html();
var tplHelperIf2 = Handlebars.compile(srcHelperIf2);
var ctxHelperIf2 = {Title:"Helper #if Example 2", FirstName:"핸들", LastName:"김"};
$('body').append(tplHelperIf2(ctxHelperIf2));

// Helper #else Example
var srcHelperElse = $('#helper-else-template').html();
var tplHelperElse = Handlebars.compile(srcHelperElse);
var ctxHelperElse = {Title:"", FirstName:"핸들", LastName:"김"};
$('body').append(tplHelperElse(ctxHelperElse));

// Helper #else Example
var srcHelperUnless = $('#helper-unless-template').html();
var tplHelperUnless = Handlebars.compile(srcHelperUnless);
var ctxHelperUnless = {Title:"", FirstName:"핸들", LastName:"김"};
$('body').append(tplHelperUnless(ctxHelperUnless));

// Helper #with Example
var srcHelperWith = $('#helper-with-template').html();
var tplHelperWith = Handlebars.compile(srcHelperWith);
var ctxHelperWith = {Title:"Helper #with Example",
	Student:{FirstName:"핸들",LastName:"김"}};
$('body').append(tplHelperWith(ctxHelperWith));

});

