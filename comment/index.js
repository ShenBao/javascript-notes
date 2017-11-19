
var disqus_shortname = "ShenBao";
var disqus_identifier = "ShenBao/comment//";
var disqus_url = "https://shenbao.github.io/comment//";

(function () {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

var hypercomments_userid = "91931";
_hcwp = window._hcwp || [];
_hcwp.push({ widget: "Stream", widget_id: hypercomments_userid });
(function () {
    if ("HC_LOAD_INIT" in window) return;
    HC_LOAD_INIT = true;
    var lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage || "en").substr(0, 2).toLowerCase();
    var hcc = document.createElement("script"); hcc.type = "text/javascript"; hcc.async = true;
    hcc.src = ("https:" == document.location.protocol ? "https" : "http") + "://w.hypercomments.com/widget/hc/" + hypercomments_userid + "/" + lang + "/widget.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hcc, s.nextSibling);
})();