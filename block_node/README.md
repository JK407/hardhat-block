

#### 运行脚本

```shell
cd /block_node
vim .env
npm i
npx hardhat node --hostname 0.0.0.0 --port 8555
```


```shell
### 使用pm2作为进程守护
pm2 start --name "block-node"  "npx -- hardhat node --hostname 0.0.0.0 --port 8555"
pm2 save
pm2 ls
pm2 stop "block-node"

```

```shell
### 使用hardhat console连接到本地节点
npx hardhat console
npx hardhat console --network remote
```