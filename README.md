## setup application:
1.open terminal type :
git clone https://github.com/Kev1ntan/Prospace.git
cd Prospace
cd server
npm i
touch .env (see the env-template format example and fill the data, for PORT use 3001)
sequelize db:create
sequelize db:migrate
setup server finish... to run the server type npm run dev

cd client
npm i
to run the server type npm start