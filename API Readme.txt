This is an API of people born in 1955. 

Methods: 

Root: 
Shows all data. 

/:name
Shows information in json for the one name you enter, if it exists. Otherwise will return null. 

/new/:name
Adds a new name to the database. Redirects to root and shows all data.  

/remove/:name
Removes a name from the database. Redirects to root and shows all data. 