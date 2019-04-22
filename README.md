# Email-Manager

## Steps to run UI the project

1) Go to `ui/` folder and run `npm install` to install the ui requirements and it will add `node_modules` folder
2) Run `npm run serve` to start the ui and go to `http://localhost:3000`

## Steps to run Flask-Service
1) Go to `Flask-Service` folder
1) `pip install flask`
2) `$ export FLASK_APP=hello.py`
3) `$ flask run`
4) `pip install sendgrid`
5) `export SENDGRID_API_KEY=`

## Steps to run the django rest
1) Make sure you have `postresql` installed and create a database with `createdb email-manager`
2) Go to `server/` folder and run `pip install -r common.py` to install the server requirements
3) Makemigrations `python manage.py makemigrations` and migrate `python manage.py migrate`
4) Then run the server with `python3 manage.py runserver` and go to 'http://localhost:8000'
