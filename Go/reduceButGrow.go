// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order.

// Mejor solicion, mi solucion
package main

func main() {
	Grow([]int{1, 2, 3})
}

func Grow(arr []int) int {
	acc := 1
	for _, n := range arr {
		acc *= n
	}
	println(acc)
	return acc
}
