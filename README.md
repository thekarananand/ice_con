# Website for E2A Conference! (Prerelease)

## Stack used

- Development Framework : **NEXT.JS**

## Current Versel Deployment

- main : [https://ice-con.vercel.app/](https://ice-con.vercel.app/)

## Spin the Development Server 

- **Step 1**: Download the Latest Dependencies (i.e., node_modules)

    ``` bash
    npm audit fix
    npm install
    ```
    > **Node.js** must be installed!

- **Step 2**: Start the Development Server 

    ``` bash
    npm run dev
    ```

- **Step 3**: The Website will be available at [localhost:3000](http://localhost:3000) 


## Start Local Deployment

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
    ```

- Start the Deployment
    ``` bash
    npm run start
    ```

## Deploy on Docker Container

I have a dedicated page for that 👉👉 [/docker/README.md](https://github.com/thekarananand/ice_con/tree/main/docker)

> ### Opt Out of Next Telemetry
> **Docs** : [nextjs.org/telemetry](https://nextjs.org/telemetry)
> - Opt Out : ``npx next telemetry disable``
> - Check Status : ``npx next telemetry status``
