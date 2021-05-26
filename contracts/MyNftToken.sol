// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import '@openzeppelin/contracts/utils/Counters.sol';


contract MyNftToken is ERC721, ERC721Enumerable, ERC721URIStorage {
    constructor() ERC721("MyToken", "MTK") {}

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    //mapping(string => uint8) hashes;
    
    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    function createToken(address recipient, string memory metadata)
    public
    returns (uint256)
    {  
        //require(hashes[hash] != 1);  
        //hashes[hash] = 1;  
        _tokenIds.increment();  
        uint256 newItemId = _tokenIds.current();  
        _mint(recipient, newItemId); 
        _setTokenURI(newItemId, metadata);  
        return newItemId;
    }
}