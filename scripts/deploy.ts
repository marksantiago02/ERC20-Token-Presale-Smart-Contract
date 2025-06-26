import { ethers } from 'hardhat';

async function main() {
  console.log('🚀 Starting deployment...\n');

  // Get deployer account
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with account: ${deployer.address}`);
  console.log(`Account balance: ${ethers.formatEther(await ethers.provider.getBalance(deployer.address))} ETH\n`);

  // ===================
  // 1. Deploy ECT Token
  // ===================
  console.log('📄 Deploying ECT token...');
  const instanceECT = await ethers.deployContract("ECT");
  await instanceECT.waitForDeployment();
  const ECT_Address = await instanceECT.getAddress();
  console.log(`✅ ECT deployed at: ${ECT_Address}\n`);

  // ======================
  // 2. Deploy Presale Contract
  // ======================
  console.log('🏪 Deploying Presale contract...');
  
  // Presale configuration
  const softcap = ethers.parseUnits("300000", 6);
  const hardcap = ethers.parseUnits("1020000", 6);
  const presaleStartTimeInMilliSeconds = new Date(Date.now() + 15* 60 * 1000); // 15 mins later from now
  const presaleStartTime = Math.floor(presaleStartTimeInMilliSeconds.getTime() / 1000);
  const presaleDuration = 24 * 3600 * 30;  // 30 days
  const presaleTokenPercent = 10;

  console.log('Presale Parameters:');
  console.log(`- Softcap: 300,000 tokens`);
  console.log(`- Hardcap: 1,020,000 tokens`);
  console.log(`- Start time: ${presaleStartTimeInMilliSeconds.toISOString()}`);
  console.log(`- Duration: 30 days`);
  console.log(`- Token percent: 10%`);
  console.log(`- ECT address: ${ECT_Address}\n`);

  const instancePresale = await ethers.deployContract("Presale", [
    softcap, 
    hardcap, 
    presaleStartTime, 
    presaleDuration, 
    ECT_Address, 
    presaleTokenPercent
  ]);
  
  await instancePresale.waitForDeployment();
  const Presale_Address = await instancePresale.getAddress();
  console.log(`✅ Presale deployed at: ${Presale_Address}\n`);

  // ===================
  // 3. Deployment Summary
  // ===================
  console.log('🎉 DEPLOYMENT COMPLETED!');
  console.log('========================');
  console.log(`📄 ECT Token: ${ECT_Address}`);
  console.log(`🏪 Presale: ${Presale_Address}`);
  console.log(`👤 Deployer: ${deployer.address}`);
  console.log(`⏰ Start Time: ${presaleStartTime} (${presaleStartTimeInMilliSeconds.toISOString()})`);
  console.log('\n📋 Next Steps:');
  console.log('1. Verify contracts on Etherscan');
  console.log('2. Set up any required permissions');
  console.log('3. Test the presale functionality');
}

// Execute deployment
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('❌ Deployment failed:', error);
    process.exitCode = 1;
  });
