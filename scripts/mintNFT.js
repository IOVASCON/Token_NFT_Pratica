async function main() {
    const [owner] = await ethers.getSigners();
    const contract = await ethers.getContractAt("MeuNFT", "Endereço_Do_Contrato_Aqui");

    // URI do metadado do NFT
    const tokenURI = "ipfs://sua_uri_aqui";
    await contract.safeMint(owner.address, tokenURI);

    console.log(`NFT minted to ${owner.address}`);
}

main().then(() => process.exit(0))
      .catch(error => {
          console.error(error);
          process.exit(1);
      });
