//=============== Constants =============== 
const localhost = 'http://localhost:3000/';
const userdocs = localhost + 'docs/intro';

const navbarItemsName = '.navbar__items';
const sidebarItemsName = 'ul.theme-doc-sidebar-menu.menu__list';
const footerItemsName = 'footer.footer--dark';

const IS_label = 'Íslenska';
const EN_label = 'English';

const data = require('../fixtures/barData.json');
const navBar = data.navBar;

const min_width = 784;
const min_height = 1564.65;

const sec = 1000;

const GET_res = 200;

//=============== Functions =============== 

//find tag b inside tag element a
function findTag(a,b){
  if (a.find(b).length > 0) { //if list contains a div then there is a hidden list in there (such case is in sidebarMenu)
        
    cy.log('found '+ b);
    return true;
    

  }

  cy.log('did not find ' + b)
  return false;

}

//takes in a class name and translate it to a text that cypress test can read
function translateCNameToCyReadable(cName){
  return '.' + cName.replace(/ /g, '.');

}

//Find the link of a item in navbar based on label
function findLinkByLabel(label,container) {
  for (let i = 0; i < container.items.length; i++) {
    if (container.items[i].label === label) {
      return container.items[i].link;
    }
  }
  return 'notFound!'; // Return null if label is not found
}

// check if the websiteURL is the icelandic section of the website our website
function isIS(websiteURL) {

  if (websiteURL == findLinkByLabel(IS_label,navBar)){return true};
  return false;

}

//Find text on page 
function findTextOnSite(websiteURL,expct,text){

  cy.request(websiteURL)
  .then((response) => {

    if (!expct){ 
      
      expect(response.body).to.not.include(text);
    
    } else{expect(response.body).to.include(text)}

  });
}


//check if verifyURL got the responded with the 'expected status' 
function verifyURL(urls,expected_status){
  const pageNotFound = 'Page Not Found';

  for (url in urls){
    
    cy.request(url)
    .then((response) => {
  
      if(isIS(url)){ //Pages that are not icelandic url path should not get 'Page Not Found' displayed
        findTextOnSite(url,false,pageNotFound)
      
      }else {expect(response.status).to.eq(expected_status)};
    });
  }


}

//Iterate children <a> tags of a given name of parent and a requested tag
function iterateAtagItems(containerName) {
  const gottenHrefs = Array();

  cy.get(containerName)
    .find('a')
    .each(($a) => {

      // Use the `force` command to interact with hidden elements
      // cy.wrap($a).invoke('show').click({ force: true, timeout: 5*sec });

      var title = $a.text();
      var gottenHref = $a.prop('href').split('#')[0] // removing the '#' at the end of a link if such link contains it
      


      const exists = gottenHrefs.some(item => {
        return item.title === title && item.gottenHref.split('#')[0].trim()  === gottenHref;
      });
      
      if (!exists) {
        gottenHrefs.push({title,gottenHref})
      }


      if (gottenHref.includes('github.com')){
        return false;
      }

      cy.visit(gottenHref, { timeout: 5*sec });
      cy.wait(0.5*sec);
    });

    

    return gottenHrefs;
}

//Takes in a container that has <li> item and iterates all A tags within it.
function iterateList(containerName) {
  cy.get(containerName)
    .find('li')
    .each(($li) => {
      if (findTag($li, 'div')){ //sidebar contains a <div> element if it contains a hidden <ul>

          cy.wrap($li).click();
          cy.wait(0.5*sec); // Adjust the delay as needed 
      }
    });

    iterateAtagItems(containerName);
}



//=============== E2E TESTS =============== 

const testcase1 = 'Navigation bar';
const testcase1_1 = 'get navigation bar';
const testcase1_2 = 'get navigation bar items';
const testcase1_3 = 'Verify that navigation bar items navigate to all expected locations';
const testcase1_4 = 'Verify that navigation bar items navigate to open location';

const testcase2 = 'iterate through side menu';
const testcase2_1 = 'iterate through side menu links';


const testcase3 = 'Footer';
const testcase3_1 = 'Iterate through links in footer';


describe(testcase1, () => {
  beforeEach(() => {
    cy.visit(localhost);
  });

  it(testcase1_1, () => {
    cy.get('nav');

  });  
  
  it(testcase1_2, () => {
    cy.get(navbarItemsName);
  });  


  it (testcase1_3, () => {
    cy.wrap(iterateAtagItems(navbarItemsName)).should((gottenHrefs) => {
      expect(gottenHrefs.length).to.equal(navBar.items.length);
    });
  });

  it(testcase1_4, () => {
    var gottenHrefs = iterateAtagItems(navbarItemsName);
    verifyURL(gottenHrefs,GET_res);
  });
  
});

describe(testcase2, () => {
  beforeEach(() => {
    cy.visit(userdocs);
  });

  it(testcase2_1, () => {
    iterateList(sidebarItemsName);
  });

})


describe(testcase3,() => {
  beforeEach(() => {
    cy.visit(localhost);
  });

  it (testcase3_1, () => {
    var gottenHrefs = iterateAtagItems(footerItemsName);
    verifyURL(gottenHrefs,GET_res);
  })

})
