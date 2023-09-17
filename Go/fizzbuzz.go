package main

import (
	"fmt"
	"log"
	"time"
)

const Fizz string = "Fizz"
const Buzz string = "Buzz"
const total = 1e+6

func fizzbuzz(n int) {
	switch {
	case n%15 == 0:
		fmt.Printf("%d %s \n", n, Fizz+Buzz)
	case n%5 == 0:
		fmt.Printf("%d %s \n", n, Buzz)
	case n%3 == 0:
		fmt.Printf("%d %s \n", n, Fizz)
	default:
		fmt.Printf("%d \n", n)
	}
}

func ExecTime(start time.Time, name string) {
	elapsed := time.Since(start)
	log.Printf("%s took %s", name, elapsed)
}

func main() {
	defer ExecTime(time.Now(), "main")

	var i int = 1
	for i < total {
		fizzbuzz(i)
		i++
	}
}
