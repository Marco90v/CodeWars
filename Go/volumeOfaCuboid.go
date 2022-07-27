// Description
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
// Mejor solucion, mi solucion

package main

func main() {
	GetVolumeOfCuboid(1.0, 2.0, 2.0)
}

func GetVolumeOfCuboid(length, width, height float64) float64 {
	println(length * width * height)
	return length * width * height
}
