function quick_sort(lst) {
	if(lst.length < 2)
			return lst;
		let pivot = lst[0];
		let less = lst.slice(1).filter(x => x <= pivot);
		let more = lst.slice(1).filter(x => x > pivot);
		return quick_sort(less).concat(pivot).concat(quick_sort(more));
}

console.log(quick_sort([5,9,8,7,2,3,6,1,0]));