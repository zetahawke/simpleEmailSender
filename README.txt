follow the next instructions to install your own website email sender application.

1.- Install node js for your current platform from this website: https://nodejs.org/en/ 
2.- Once node is installed on your system proceed to open your system command line (terminal in linux, CMD on windows)
3.- move to this project directory (something like... C://User/MyUser/Desktop/myapp)
4.- Once you get there type:
	npm install

5.- that will install all project dependencies... now type:
	set DEBUG=myapp:* & npm start

6.- that will set this application for start just tiping:
	npm start
(for stop the server press: ctrl + C and type Y)


for style or structure modification feel free for modify
	/views/index.jade 			(yeah, it use jade syntax)
	/public/stylesheets/style.css

visit http://html2jade.org/ if you have problems with html jade syntax