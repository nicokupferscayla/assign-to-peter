var jira______scayla = 'jira\.scayla\.com';
var check_check_check_check______scayla;

if (window.location.href.match(jira______scayla)) {
  document.body.innerHTML += 
  '<button onclick="runCode______scayla()" id="scayla____add_bug">Bug Template</button>' +
  '<style>#scayla____add_bug{z-index:10000000;position: fixed; top: 3px; right: 350px;' +
  'background-color:#549eff; display: inline-block; padding: 8px;color: #eee;border: 0;' +
  'font-weight: bold;font-size: 13px;border-radius: 4px;}' +
  '</style>';
}


/**
 * Runs the function that sets the template bug
 */
function runCode______scayla() {  
  if (!document.querySelectorAll("#create-issue-dialog").length) {
    check_check_check_check______scayla = setInterval(() => { 
      if (document.querySelectorAll('#create-issue-dialog').length) {      
        document.getElementById('create_link').click();
        clearInterval(check_check_check_check______scayla);
        setTypeBug______scayla();
      }
    }, 50)
  } else {
    setTypeBug______scayla();
  }
  
}

function setTypeBug______scayla() {
    document.querySelectorAll("#project-single-select > .icon")[0].click();
    setTimeout(() => {
      var projects = document.querySelectorAll('#all-projects > li');
      for (var i = 0; i < projects.length; ++i) {
        if (projects[i].id.match(/\(scayla\)/)) {
           console.log(projects[i])
           console.log('selecting project: ', projects[i].id);
           projects[i].className += "active"
           setTimeout(() => {projects[i].click();}, 100)
           break;
        }
      }
    }, 300)
    setTimeout(() => {
      document.querySelectorAll("#issuetype-single-select > .icon")[0].click();
      setTimeout(() => {
        jQuery('#issuetype-suggestions li').removeClass('active');
        var bug = jQuery('#issuetype-suggestions li.aui-list-item-li-bug');
        if (bug.length) {
          console.log('bug', bug);
          bug.addClass("active");
          setTimeout(() => {bug.trigger('click');}, 100);
        } else {
          document.querySelectorAll("#issuetype-single-select > .icon")[0].click();
        }
      }, 300);
    }, 600)
    setTimeout(() => {
      jQuery('.aui-nav > li[data-mode="source"] > a')[0].click();
      if ( document.getElementById("description").value === "" ) {
        document.getElementById("description").value = 
`h3. Steps To Reproduce
* Go to ...  

h3. Expected Result
* ...  

h3. Actual Result
* ...   


-------   

h3. Extra
* Observed on:
    - environment: 
    - version: 
`;
      }
      if ( document.getElementById("summary").value === "") {
          document.getElementById("summary").value = "[FE / BE]"
      }
      setTimeout(() => { jQuery('.aui-nav > li[data-mode="wysiwyg"] > a')[0].click();}, 600)
    }, 1500);
  
}
