// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Flipkart is ERC721 {
    address public owner;
    uint tokenId = 1;

    struct Product{
        uint tokenId;
        string productId;
        string productName;
        address owner;
        uint256 expiryDate;
    }

    Product[] public allProducts;

    mapping(address => Product[]) public productAddress; // Maps products with their owner address
    mapping(string => Product) public productDetails; // Maps product details with product ID
    mapping(string => bool) public productExists; // Product already exists or not
    mapping(string => bool) public productExpire; // Product is expire or not



    constructor() ERC721("FlipkartToken", "FLP ") {
        owner = msg.sender;
    }

    function getAllProducts() public view returns (Product[] memory){
        return allProducts;
    }

    function getMyProducts() public view returns (Product[] memory){
        return productAddress[msg.sender];

    }

    function createWarranty(string calldata _productId, string calldata _productName, address ownerAddress, uint256 expiryDate) public payable {

        require(!productExists[_productId], "Product already exists");
        _safeMint(ownerAddress, tokenId);


        allProducts.push(Product(tokenId, _productId,  _productName, ownerAddress, expiryDate));

        productAddress[ownerAddress].push(Product(tokenId, _productId,  _productName, ownerAddress, expiryDate));

        productDetails[_productId] = Product(tokenId, _productId,  _productName, ownerAddress, expiryDate);

        productExists[_productId] = true;
        productExpire[_productId] = false;

        tokenId++;

    }

    function claim(string calldata _productId) public payable returns(bool){

        require(productExists[_productId], "Product do not exists");
        require(!productExpire[_productId],"Product is already expired");

        Product memory product = getProductDetails(_productId);

        require(product.owner == msg.sender,"You do not own this product");

                _burn(product.tokenId);
                delete productAddress[msg.sender];
                productExists[_productId] = false;
                productExpire[_productId] = true;
                delete productDetails[_productId];

                for(uint i=0 ; i<allProducts.length ; i++){
                    if(allProducts[i].tokenId == product.tokenId){
                        deleteProduct(i);
                    }
                }

            if(product.expiryDate > block.timestamp){
                return true;
            }

        return false;

    }


    function deleteProduct(uint index) private{
        for (uint i = index; i<allProducts.length-1; i++){
            allProducts[i] = allProducts[i+1];
        }
        allProducts.pop();
    }


    function getProductDetails(string calldata _productId) public view returns(Product memory){
        return productDetails[_productId];
    }


    function transferWarranty(string calldata _productId, address receiverAddress) public payable returns(bool){

        require(productExists[_productId], "Product do not exists");
        require(!productExpire[_productId],"Product is already expired");

        Product memory product = getProductDetails(_productId);       

        require(product.owner == msg.sender, "You do not own this product"); 

        if(product.expiryDate > block.timestamp){
    
            _transfer(msg.sender, receiverAddress, product.tokenId);
            delete productAddress[msg.sender];

            Product memory newProduct = Product(product.tokenId,
                                            product.productId,
                                            product.productName,
                                            receiverAddress,
                                            product.expiryDate);

            productDetails[_productId].owner = receiverAddress;
            productAddress[receiverAddress].push(newProduct);
            
            for(uint i=0 ; i<allProducts.length ; i++){
                if(allProducts[i].tokenId == product.tokenId){
                        allProducts[i].owner = receiverAddress;
                }
            }

            return true;

        }
        else{
                _burn(product.tokenId);
                delete productAddress[msg.sender];
                productExists[_productId] = false;
                productExpire[_productId] = true;
                delete productDetails[_productId];

                for(uint i=0 ; i<allProducts.length ; i++){
                    if(allProducts[i].tokenId == product.tokenId){
                        deleteProduct(i);
                    }
                }
        }

        return false ;
    }

}