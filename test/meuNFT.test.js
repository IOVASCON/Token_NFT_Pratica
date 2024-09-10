const chai = require('chai');
const expect = chai.expect;
const { ethers } = require('hardhat');

describe("MeuNFT", function () {
    let MeuNFT, meuNFT;
    let owner, addr1, addr2, addrs;

    beforeEach(async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        MeuNFT = await ethers.getContractFactory("MeuNFT");
        meuNFT = await MeuNFT.deploy("MeuNFT", "MNFT", owner.address);
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await meuNFT.owner()).to.equal(owner.address);
        });

        it("Should mint a token successfully", async function () {
            await meuNFT.safeMint(owner.address, "https://example.com/nft");
            const balance = (await meuNFT.balanceOf(owner.address)).toNumber();
            expect(balance).to.equal(1);
        });
    });

    describe("Transactions", function () {
        it("Should transfer tokens between accounts", async function () {
            await meuNFT.safeMint(owner.address, "https://example.com/nft");
            const tokenId = 1; // Assuming the first token minted has ID 1
            await meuNFT.safeTransferFrom(owner.address, addr1.address, tokenId);
            const balance = (await meuNFT.balanceOf(addr1.address)).toNumber();
            expect(balance).to.equal(1);
        });

        it("Should fail if sender doesn’t have permission to send token", async function () {
            const tokenURI = "https://example.com/nft";
            await meuNFT.safeMint(owner.address, tokenURI);
            const tokenId = 1; // Assuming the first token minted has ID 1
            await expect(meuNFT.safeTransferFrom(addr1.address, addr2.address, tokenId))
                .to.be.revertedWith("ERC721: transfer caller is not owner nor approved");
        });
    });
});
