import {CATEGORY} from '../Types/HomeScreenProps';

const truncateString = (text: string, limit: number) => {
  let dotText = '';

  // Check if the length of the text exceeds the specified limit
  if (text.length > limit) {
    // Slice the text to the specified limit
    const splt = text.slice(0, limit);
    // Append '...' to the sliced text to indicate truncation
    dotText = splt + '...';
  } else {
    // If the length is within the limit, assign the original text to dotText
    dotText = text;
  }

  // Return the truncated text or an empty string if dotText is falsy
  return dotText || '';
};

const generateRows = (numOfRows: number, categoryData: CATEGORY[]) => {
  // Calculate the row length based on the number of rows and the length of the categoryData
  const rowLength = Math.ceil(categoryData && categoryData?.length / numOfRows);

  // Object to store the row values (e.g., { row1: 3, row2: 6 })
  const rowValue: {[key: string]: number} = {};

  // Assign row values to the rowValue object
  for (let i = 1; i <= numOfRows; i++) {
    rowValue[`row${i}`] = rowLength * i;
  }

  // Object to store the rows
  const handleRows: any = {};

  // Initialize each row as an empty array
  for (let i = 1; i <= numOfRows; i++) {
    handleRows[`row${i}`] = [];
  }

  // Assign each item from the categoryData to the corresponding row
  for (let j = 0; j < categoryData.length; j++) {
    // Iterate through the rowValue object
    for (let key in rowValue) {
      // Check if the current index falls within the range of the current row
      if (j < rowValue[key]) {
        // Push the current item to the corresponding row
        handleRows[key].push(categoryData[j]);
        // Exit the inner loop after finding the correct row
        break;
      }
    }
  }

  // Return an array containing the values of the handleRows object (i.e., the rows)
  return Object.values(handleRows);
};

export {truncateString, generateRows};
