(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ec-storytiles'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "    <li class=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\n        <!-- <a href=\""
    + alias3(((helper = (helper = helpers.readMoreLink || (depth0 != null ? depth0.readMoreLink : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"readMoreLink","hash":{},"data":data}) : helper)))
    + "\"> -->\n          <div class=\"tile-container\">\n            "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.widget : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      <div class=\"image\">\n        <img src=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.img : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" src-set=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.img : depth0)) != null ? stack1.srcSet : stack1), depth0))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n      <div class=\"copy\">\n        <h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n        <h2>"
    + alias3(((helper = (helper = helpers.flytitle || (depth0 != null ? depth0.flytitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"flytitle","hash":{},"data":data}) : helper)))
    + "</h2>\n        <div class=\"rubric\">\n          "
    + alias3(((helper = (helper = helpers.rubric || (depth0 != null ? depth0.rubric : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rubric","hash":{},"data":data}) : helper)))
    + "\n        </div>\n      </div>\n          "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hr : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        </div>\n         <!-- </a> -->\n    </li>\n\n \n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda;

  return "<div class=\""
    + this.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.widget : depth0)) != null ? stack1.jsns : stack1), depth0))
    + "\" id=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.widget : depth0)) != null ? stack1.ns : stack1), depth0)) != null ? stack1 : "")
    + "\"></div>";
},"4":function(depth0,helpers,partials,data) {
    return "<hr>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<!-- \n<div id=\"expander\">\n  <div id=\"expander-container\">\n    <div class=\"title\">expander - full page article</div>\n    <div class=\"close\">close</div>\n    <div class=\"expander-image\"><img></div>\n    <div class=\"expander-copy\">copy</div>\n  </div>\n</div> -->\n\n <!--  \"jsns\": \"mnv-widget ukel-linechart\",\n          \"ns\" : \"ukel-linechart-CUSTOMSUFFIXHERE\"\n          }\n\n\n<div  class=\"mnv-widget ukel-linechart\" id=\"ukel-linechart-CUSTOMSUFFIXHERE\"></div> -->\n\n\n<div class=\"container\">\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tiles : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n</div>\n";
},"useData":true});
}());