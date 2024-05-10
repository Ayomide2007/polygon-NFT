// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract WildNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("WildNFT", "WNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmY4dYipGM7VEgCazdL2deCqMyGM7PKRQPdGAuf8iUy4SH/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Generate 5 different images for NFT Generate 1 image for NFT Generate one more";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}