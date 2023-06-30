// 

// Function to calculate the distance in blocks from the headquarters
function distanceFromHqInBlocks(block) {
    const headquarters = 42;
    return Math.abs(block - headquarters);
  }
  
  // Function to calculate the distance in feet from the headquarters
  function distanceFromHqInFeet(block) {
    const blockInFeet = 264; // One block is equivalent to 264 feet
    return distanceFromHqInBlocks(block) * blockInFeet;
  }
  
  // Function to calculate the distance travelled in feet between two blocks
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; // One block is equivalent to 264 feet
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * blockInFeet;
  }
  
  // Function to calculate the fare price based on distance travelled
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distanceInFeet <= 400) {
      return 0; // Free sample
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const distanceInFeetAfterFreeSample = distanceInFeet - 400;
      const farePrice = distanceInFeetAfterFreeSample * 0.02; // 2 cents per foot
      return farePrice.toFixed(2); // Round to 2 decimal places
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare of 25 dollars for a distance over 2000 feet
    } else {
      return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
  }
  
  // Exporting the functions to be used in other files/tests
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  
