# Run/Build it on Docker Container

- **Step 0** : Spin a ``debian`` (on any OS) Container

- **Step 1** : Install ``git`` and ``npm`` 

    ```
    apt update
    apt install git npm -y
    ```

- **Step 2** : Download Code & Build

    ```
    git clone https://www.github.com/thekarananand/ice_con.git
    cd /ice_con
    npm audit fix --force
    npm install
    npm run build
    ```

- **Step 3** : Start the Deployment 

    ```
    npm run start
    ```
