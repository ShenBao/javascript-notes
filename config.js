
// CONFIG Setting
var CONFIG = {
  // your website's title
  document_title: "沈宝的笔记",
  // your website's url
  site_url: "http://shenbao.github.io/shenbao-notes",
  // index page
  index: "README.md",
  // sidebar file
  sidebar_file: "sidebar.md",
  // search_bar Setting
  search_bar: false,
  // github pro name
  base_url: "http://github.com/ShenBao/shenbao-notes/edit/master",
  // github url 
  github_url: "http://github.com/ShenBao/shenbao-notes",
  github_user_name: "ShenBao",
  github_repository: "shenbao-notes",
  // disqus Setting
  disqus_username: "ShenBao",
  disqus_show: true,
  // hypercomments Setting
  hypercomments_userid: 91931,
  hypercomments_show: false,
  data: 2017
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}

