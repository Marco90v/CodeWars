package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	numero := int64(1234)
	var binario string = strconv.FormatInt(numero, 2)
	var total int = strings.Count(binario, "1")
	fmt.Println(total)
}

// MEJOR SOLUCION
// package kata

// import "math/bits"

// func CountBits(n uint) int {
//   return bits.OnesCount(n)
// }
