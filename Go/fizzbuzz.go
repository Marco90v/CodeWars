package main

import (
	"fmt"
	"strconv"
)

func fizzbuzz(n uint16) string{
	if n%15 == 0 {
		return "FizzBuzz"
	}else if n%5 == 0 {
		return "Buzz"
	}else if n%3 == 0 {
		return "Fizz"
	}else{
		nString := strconv.FormatUint(uint64(n), 10)
		return nString
	}
}

func main(){
	var i uint16 = 1
	for i < 1000 {
		var res = fizzbuzz(i)
		fmt.Println(res)
		i++
	}
}