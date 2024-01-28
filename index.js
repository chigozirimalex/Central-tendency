class CentralTemdency {
  constructor() {
    mean = [20, 30, 45, 20, 60, 32, 20, 40];

  }
  /**
   * Get the mean of an array of numbers
   * @param {Array<number>} elements 
   */
  mean(elements) {
    return sum(elements) / elements.length
  }

  

}

/**
 * Sum an array of numbers
 * @param {Array<number>} elements 
 */
function sum(elements) {
  return elements.reduce((accu, elem) => accu + elem)
}