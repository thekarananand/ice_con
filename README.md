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


## Steps for Local Deployment (not working well!!... 🤕)

- **Step 1**: Download the Latest Dependencies (i.e., node_modules)

    ``` bash
    npm audit fix
    npm install
    ```
    > **Node.js** must be installed!

- **Step 2**: Build Time

    ``` bash
    npm run build
    ```

- **Step 3**: Start the Server

    ``` bash
    npm run start
    ```

## Run/Build it on Docker Container (not working well!!... 🤕)

I have a dedicated page for that 👉👉 [/docker/README.md](https://github.com/thekarananand/ice_con/tree/main/docker)

## Opt Out of Next Telemetry

Docs : [nextjs.org/telemetry](https://nextjs.org/telemetry)

- Opt Out
    ```
    npx next telemetry disable
    ```

- Check Status
    ```
    npx next telemetry status
    ```