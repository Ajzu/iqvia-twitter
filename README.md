# iqvia-twitter
Repo- contains IQVIA assignment

Project Setup/installation instructions:
  I had encountered Allow origin issue- There are two ways to fix it 
    First install chrome extension by using following link
    
    Allow control allow origin - https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en&
    
    Alternate solution (if windows os) - open run window, Run following command:
      chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
    Open Github link:
      https://github.com/Ajzu/iqvia-twitter
    
    Create new folder in local system- let's say "TwitterProject"
    Open cli and change directory/nagivate to newly added folder "TwitterProject"
    
    For cloning git project run following comand:
        git clone https://github.com/Ajzu/iqvia-twitter.git
    
    Navigate to newly cloned project folder inside "TwitterProject" by running following command:
        cd iqvia-twitter
    
    Run fetch command:
        git fetch origin
    
    Run git checkout command to access "Features" branch
        git checkout features
    
    Run git pull command to pull the resource from github in local system:
        git pull origin features
    
    Run following command to Install all the npm packages required for running the project
        npm install
    
    Run following command to build and run the server, I have changed the port to "4301"
        ng serve
        or ng serve 5000
          port number of user's choice here it's 5000
    
    Open following url in chrome:
        http://localhost:4301/#/pages/tables/smart-table
        or click on Twitter Dashboard
