const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const MeuNFT = await hre.ethers.getContractFactory("MeuNFT");
    const meuNFT = await MeuNFT.deploy("NomeDoToken", "SimboloDoToken", deployer.address);  // Adicionando deployer.address

    console.log("MeuNFT deployed to:", meuNFT.address);
}

main().then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
