jQuery Mobile Example & Project ( node.js & handlebars )

2015.03.26 : initial drop [한정현]

현재 $ grunt dev:5 를 하게 되면
빌드가 실행 됩니다.
jsfile 의경우 5챕터의 js 파일을

jsfile5 입니다.
{{#if jsfile5}}
<script src="{{path dirname '5/resources'}}/js/pages/{{jsfile5}}.js"></script>
{{/if}}

만약 6챕터를 따로 만드실경우

{{#if jsfile6}}
<script src="{{path dirname '6/resources'}}/js/pages/{{jsfile6}}.js"></script>
{{/if

와 같이 해주시면 됩니다.
