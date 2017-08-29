# bamazon

Bamazon is an app where it can take orders from the user in which it will deplete the stock quantities of the specific item that was chosen. This app is accessed through the terminal using node and access the mySQL database using the JSON package. The use will be able to choose the item they want and the amount they want to buy.

GETTING STARTED
Prerequisites
You need to download the mySQL workbench from https://dev.mysql.com/downloads/workbench/

![Alt text](/images/mySQL.png?raw=true)

If you're using a Mac, you need to download the community server as well.

![Alt text](/images/communityServer.png?raw=true)

You also need to install Node.js and utilize the commandline for node package manager(npm)

INSTALLING
Homebrew
This tool makes it a cinch to install new programs and libraries in your Terminal window.
Go to http://brew.sh. Copy the script listed under “Install Homebrew.”
Paste the script into your Terminal window. Press the return key when prompted.


Node.js: NOTE: make sure you have brew installed before you run this.
This runtime environment has quickly become a standard for coding back-end programs. Your code will run on Node throughout most of the course.
Just run this command in your Terminal window: brew install node
Type 'node –v' in Terminal, and hit return. If Terminal returns a version number, then you’ve successfully installed Node.

mySQL
Follow the instructions to download the mySQL workbench.
When the mySQL is working, you should get a server that shows a green server status. If the server status is off, make sure to turn on the server which varies depending on the system

![Alt text](/images/serverGreen.png?raw=true)

npm
Make sure to typ in "npm init" command to initial usage of node package manager. Afterwards install whatever package 'mysql' with 'npm install' along with any additional packages you plan to use for the app
eg. npm install --save mysql inquirer

RUNNING THE TEST
You should first make the database and input the information inside.

![Alt text](/images/database.png?raw=true)

You should create a Javascript file that you can run with Node to order items available on Bamazon. When you run it, it could list items and allow you to buy. Then you can but items according to ID and stock quantity in which the quantity decreases by the amount input the user.

![Alt text](/images/terminallist.png?raw=true)

![Alt text](/images/buyItems.png?raw=true)

Before
![Alt text](/images/before.png?raw=true)

After
![Alt text](/images/after.png?raw=true)

If there isn't enough of the quantity, the order should not go through.

LOOKING BACK
The most frustrating part about this assignment for me was the syntax in the database since one semi-colon could make or break your code.
