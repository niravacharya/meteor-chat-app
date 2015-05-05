# meteor-chat-app

Required Packages (help: meteor add [package_name])
1. accounts-ui
2. accounts-google
3. accounts-password

Below is the information for meteor chat application

1. Start server: meteor run -p 8080
2. Run on web: http://localhost:8080
3. For google authentication
	a. Get client_key and client_secret
	b. set redirect_url: http://localhost:8080/_oauth/google in oauth setting of google
	c. set JavaScript origins: http://localhost:8080/

	And you are good to go for google login

4. Normal login is also available
5. After login, you will see loby contains list of rooms and you can create new one with input text. 
6. In rooms, you can read or write messages 


