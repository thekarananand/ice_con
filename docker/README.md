# Run/Build it on Docker Container

- **To Do** : Make a  Docker File 

- Here's The Deployment Script

``` bash
# Install git, npm.
apt install git npm -y

# Clone this repo.
git clone https://www.github.com/thekarananand/ice_con.git

# Build Process.
cd ice_con
npm audit fix
npm install 
npx next telemetry disable # Opt-Out of Next/Telemetry
npm run build

# Start the Server
npm run start
```
