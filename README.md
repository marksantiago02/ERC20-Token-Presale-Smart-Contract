# ERC20 Token Presale ICO Smart Contract on Ethereum

Launch your own **ERC20 token presale** and run a fully-featured **Ethereum ICO smart contract** with this open-source Solidity implementation. This **token sale smart contract** supports multiple payment options including ETH, USDT, USDC, and DAI, enabling projects to efficiently raise funds during their **cryptocurrency crowdsale**.

Designed with scalability and flexibility in mind, this contract enables token creators to manage a **multi-stage ICO**, implement tokenomics, and reward early investors with bonuses.

Explore the documentation below to learn how to deploy, configure, and operate your **ERC20 token launch** and presale campaign on Ethereum's mainnet or testnets.

---

## 🔑 Keywords

Ethereum ICO, ERC20 Token Presale, Token Launch, ICO Smart Contract, Cryptocurrency Crowdsale, Ethereum Token Sale, Solidity Smart Contract, Token Sale Platform, Blockchain Fundraising

---

## 📈 Ethereum Token Sale Overview

A complete solution for launching your ERC20 token and running a successful token presale (ICO) on Ethereum. This smart contract is built with Solidity and supports multiple payment methods including ETH, USDT, USDC, and DAI.

---

## 🚀 Key ICO & Presale Features

### ERC20 Token Specifications

- **Standard:** ERC20 Compliant  
- **Name:** ERC20 Token  
- **Symbol:** ECT  
- **Decimals:** 18  
- **Total Supply:** 100,000,000,000 (100 billion) tokens  

### Ethereum Presale Structure & Tokenomics

- **Allocation:** 10,000,000,000 (10 billion) tokens (10% of total supply)  
- **Duration:** 30 days  
- **Funding Goals:**  
  - Softcap: 500,000 USDT  
  - Hardcap: 1,020,000 USDT  
- **Minimum Investment:** 100 USDT equivalent  

### Multi-Stage ICO Pricing Model

| Stage | Token Price (USDT) | Allocation (tokens)  |
|-------|--------------------|---------------------|
| 1     | 0.00008            | 3 billion           |
| 2     | 0.00010            | 4 billion           |
| 3     | 0.00012            | 2 billion           |
| 4     | 0.00014            | 1 billion           |

### Supported Cryptocurrency Payments

- Ethereum (ETH)  
- Tether (USDT)  
- USD Coin (USDC)  
- Dai (DAI)  

### Investor Benefits & Rewards

- Early investors (before softcap) qualify for bonus tokens from any unsold allocation  
- Token claiming available after presale completion  

---

## 💻 Web3 Wallet Compatibility

Compatible with major Web3 wallets:  
- MetaMask  
- Phantom  
- Coinbase Wallet  
- WalletConnect  
- Rainbow  

---

## 🌐 Blockchain Network Support

- **Testing:** Sepolia Testnet  
- **Production:** Ethereum Mainnet  

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/BTC415/ERC20-Token-Presale-Smart-Contract.git
   cd ERC20-Token-Presale-Smart-Contract
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```bash
   # Network Configuration
   SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
   MAINNET_RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
   
   # Wallet Configuration
   PRIVATE_KEY=your_private_key_here
   
   # Etherscan API (for contract verification)
   ETHERSCAN_API_KEY=your_etherscan_api_key
   ```

4. **Compile contracts**
   ```bash
   npx hardhat compile
   ```

---

## 🚀 Deployment Guide

### Quick Deployment

Deploy both ECT token and Presale contracts with a single command:

```bash
# Deploy to local network
npm run deploy

# Deploy to Sepolia testnet
npm run deploy:sepolia

# Deploy to Ethereum mainnet
npm run deploy:mainnet
```

### Deployment Configuration

Before deploying, you can customize the presale parameters in `scripts/deploy.ts`:

```typescript
// Presale configuration
const softcap = ethers.parseUnits("300000", 6);           // 300,000 tokens
const hardcap = ethers.parseUnits("1020000", 6);          // 1,020,000 tokens
const presaleStartTimeInMilliSeconds = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now
const presaleDuration = 24 * 3600 * 30;                   // 30 days
const presaleTokenPercent = 10;                            // 10% of total supply
```

### Step-by-Step Deployment

#### 1. **Deploy to Sepolia Testnet (Recommended for Testing)**

```bash
# Make sure you have Sepolia ETH in your wallet
npx hardhat run scripts/deploy.ts --network sepolia
```

**Expected Output:**
```
🚀 Starting deployment...

Deploying contracts with account: 0x1234...
Account balance: 0.5 ETH

📄 Deploying ECT token...
✅ ECT deployed at: 0xF4072Ee965121c2857EeBa0D6e3C6B9795403072

🏪 Deploying Presale contract...
Presale Parameters:
- Softcap: 300,000 tokens
- Hardcap: 1,020,000 tokens
- Start time: 2024-12-15T10:15:00.000Z
- Duration: 30 days
- Token percent: 10%
- ECT address: 0xF4072Ee965121c2857EeBa0D6e3C6B9795403072

✅ Presale deployed at: 0x9876543210abcdef...

🎉 DEPLOYMENT COMPLETED!
========================
📄 ECT Token: 0xF4072Ee965121c2857EeBa0D6e3C6B9795403072
🏪 Presale: 0x9876543210abcdef...
👤 Deployer: 0x1234...
⏰ Start Time: 1734256500 (2024-12-15T10:15:00.000Z)
```

#### 2. **Deploy to Ethereum Mainnet**

```bash
# ⚠️ Make sure you have enough ETH for gas fees
npx hardhat run scripts/deploy.ts --network mainnet
```

### Contract Verification

After deployment, verify your contracts on Etherscan:

```bash
# Verify ECT Token
npx hardhat verify --network sepolia <ECT_ADDRESS>

# Verify Presale Contract
npx hardhat verify --network sepolia <PRESALE_ADDRESS> "<SOFTCAP>" "<HARDCAP>" <START_TIME> <DURATION> "<ECT_ADDRESS>" <TOKEN_PERCENT>
```

**Example:**
```bash
npx hardhat verify --network sepolia 0xF4072Ee965121c2857EeBa0D6e3C6B9795403072

npx hardhat verify --network sepolia 0x9876543210abcdef... "300000000000" "1020000000000" 1734256500 2592000 "0xF4072Ee965121c2857EeBa0D6e3C6B9795403072" 10
```

---

## ⚙️ Configuration Options

### Presale Parameters

You can customize these parameters in the deployment script:

| Parameter | Description | Default Value |
|-----------|-------------|---------------|
| `softcap` | Minimum funding goal | 300,000 tokens |
| `hardcap` | Maximum funding goal | 1,020,000 tokens |
| `presaleStartTime` | When presale begins | 15 minutes from deployment |
| `presaleDuration` | How long presale runs | 30 days |
| `presaleTokenPercent` | % of total supply for presale | 10% |

### Network Configuration

Update `hardhat.config.ts` for additional networks:

```typescript
networks: {
  sepolia: {
    url: process.env.SEPOLIA_RPC_URL,
    accounts: [process.env.PRIVATE_KEY]
  },
  mainnet: {
    url: process.env.MAINNET_RPC_URL,
    accounts: [process.env.PRIVATE_KEY]
  },
  polygon: {
    url: "https://polygon-rpc.com",
    accounts: [process.env.PRIVATE_KEY]
  }
}
```

---

## 🧪 Testing

### Run Tests

```bash
# Run all tests
npx hardhat test

# Run specific test file
npx hardhat test test/ECT.test.js

# Run tests with gas reporting
REPORT_GAS=true npx hardhat test
```

### Local Testing

```bash
# Start local Hardhat node
npx hardhat node

# Deploy to local network (in another terminal)
npx hardhat run scripts/deploy.ts --network localhost
```

---

## 📋 Post-Deployment Checklist

After successful deployment:

- [ ] **Verify contracts** on Etherscan
- [ ] **Test presale functionality** with small amounts
- [ ] **Set up monitoring** for presale events
- [ ] **Configure frontend** with contract addresses
- [ ] **Fund presale contract** if required
- [ ] **Announce presale** to your community
- [ ] **Monitor gas prices** for optimal user experience

---

## 🔧 Troubleshooting

### Common Issues

**1. Insufficient Gas**
```bash
Error: insufficient funds for gas * price + value
```
**Solution:** Add more ETH to your deployer wallet

**2. Network Connection Issues**
```bash
Error: could not detect network
```
**Solution:** Check your RPC URL in `.env` file

**3. Contract Verification Failed**
```bash
Error: Contract source code already verified
```
**Solution:** Contract is already verified, or check constructor parameters

**4. Presale Start Time in Past**
```bash
Warning: Presale start date is in the past
```
**Solution:** Update the start time in `deploy.ts`

### Getting Help

- Check [Hardhat Documentation](https://hardhat.org/docs)
- Review [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)
- Join our [Discord Community](https://discord.gg/your-server)

---

## ⚙️ Token Presale Implementation Guide

1. Deploy the token contract to Sepolia Testnet for testing  
2. Configure presale parameters (allocation, pricing, duration, etc.)  
3. Test all investor and owner functions thoroughly  
4. Deploy to Ethereum Mainnet for production use  

---

## 📋 Smart Contract Functions & Documentation

For a detailed breakdown of all available functions for owners and investors, please refer to our [Function Documentation](https://github.com/marksantiago02/ERC20-Token-Presale-smart-contract/blob/master/function_description.md).

---

## 🔧 Advanced Features To Consider

- Functions like `createRound`, `endRound`, and `extendRound` for presale phase management by the owner  
- Investor promotion mechanisms such as revenue sharing or early investor bonuses  
- Implementation of bonding curve models for dynamic pricing  

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

---

## 📞 Contact Information

- **Email:** marksantiago0929@gmail.com  
- **Telegram:** [@marksantiago02](https://t.me/marksantiago02)  
- **Discord:** @marksantiago02_  
- **Twitter:** [@marksantiago02](https://twitter.com/marksantiago02)  
- **Instagram:** [@marksantiago_0929](https://www.instagram.com/marksantiago_0929/)  
- **LinkedIn:** [Mark Santiago](https://www.linkedin.com/in/mark-santiago-373172339/)  

---

## ⭐ Contribute & Support

If you find this project useful, please consider starring the repo and sharing it with others. Your support helps improve and maintain this open-source token presale platform.

---

Feel free to open issues or submit pull requests to contribute!

