// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LostAndFound {
    // Structs
    struct LostItem {
        uint id;
        address reporter;
        bytes32 descriptionHash;
        bytes32 locationHash;
        uint date;
        string photoHash; // IPFS hash for the photo
        bool isResolved;
    }

    struct FoundItem {
        uint id;
        address reporter;
        bytes32 descriptionHash;
        bytes32 locationHash;
        uint date;
        string photoHash; // IPFS hash for the photo
        bool isResolved;
    }

    // State Variables
    uint public lostItemCount = 0;
    uint public foundItemCount = 0;
    mapping(uint => LostItem) public lostItems;
    mapping(uint => FoundItem) public foundItems;

    // Events
    event LostItemReported(uint id, address reporter, string description, string location, uint date, string photoHash);
    event FoundItemReported(uint id, address reporter, string description, string location, uint date, string photoHash);
    event ItemMatched(uint lostItemId, uint foundItemId, address lostReporter, address foundReporter);

    // Submit Lost Report - Remove payable keyword since we're not accepting ETH
    function reportLostItem(string memory _description, string memory _location, uint _date, string memory _photoHash) public {
        bytes32 descriptionHash = keccak256(abi.encodePacked(_description));
        bytes32 locationHash = keccak256(abi.encodePacked(_location));
        lostItemCount++;
        lostItems[lostItemCount] = LostItem(lostItemCount, msg.sender, descriptionHash, locationHash, _date, _photoHash, false);
        emit LostItemReported(lostItemCount, msg.sender, _description, _location, _date, _photoHash);
    }

    // Submit Found Report - Remove payable keyword since we're not accepting ETH
    function reportFoundItem(string memory _description, string memory _location, uint _date, string memory _photoHash) public {
        bytes32 descriptionHash = keccak256(abi.encodePacked(_description));
        bytes32 locationHash = keccak256(abi.encodePacked(_location));
        foundItemCount++;
        foundItems[foundItemCount] = FoundItem(foundItemCount, msg.sender, descriptionHash, locationHash, _date, _photoHash, false);
        emit FoundItemReported(foundItemCount, msg.sender, _description, _location, _date, _photoHash);
    }

    // Matching Logic
    function matchItems(uint _lostItemId, uint _foundItemId) public {
        require(lostItems[_lostItemId].isResolved == false, "Lost item is already resolved.");
        require(foundItems[_foundItemId].isResolved == false, "Found item is already resolved.");

        LostItem storage lostItem = lostItems[_lostItemId];
        FoundItem storage foundItem = foundItems[_foundItemId];

        // Simple matching logic (can be expanded)
        if (lostItem.descriptionHash == foundItem.descriptionHash &&
            lostItem.locationHash == foundItem.locationHash) {
            
            // Mark items as resolved
            lostItem.isResolved = true;
            foundItem.isResolved = true;

            // Emit match event
            emit ItemMatched(_lostItemId, _foundItemId, lostItem.reporter, foundItem.reporter);
        }
    }

    // Ownership Verification (Simple Example)
    function verifyOwnership(uint _lostItemId, uint _foundItemId) public view returns (bool) {
        LostItem memory lostItem = lostItems[_lostItemId];
        FoundItem memory foundItem = foundItems[_foundItemId];

        // Check if the lost and found items match
        return (lostItem.descriptionHash == foundItem.descriptionHash &&
                lostItem.locationHash == foundItem.locationHash);
    }
}