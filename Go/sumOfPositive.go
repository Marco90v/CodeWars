// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

package main

func main() {
	PositiveSum([]int{-1, -2, -3, -4, -5})
}

func PositiveSum(n []int) {
	var acc int = 0
	for i := 0; i < len(n); i++ {
		if n[i] >= 0 {
			acc += n[i]
		}
	}
	println("Suma Total es: %d", acc)
}

// MEJOR SOLUCION
// package kata

// func PositiveSum(numbers []int) (sum int) {
//   for _, num := range numbers {
//     if num > 0 {
//       sum = sum + num
//     }
//   }
//   return
// }
