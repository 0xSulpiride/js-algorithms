function merge(lstl, lstr) {
	let lst = [];
	while(lstl.length > 0 && lstr.length > 0) {
		lst.push((lstl[0] > lstr[0] ? lstr : lstl).shift())
	}
	if(lstl.length > 0)
		lst.push(...lstl);
	if(lstr.length > 0)
		lst.push(...lstr);
	return lst;
}

function mergeSort(lst) {
	if(lst.length < 2)
		return lst;
	let mid = lst.length / 2;
	let lstl = mergeSort(lst.slice(0, mid));
	let lstr = mergeSort(lst.slice(mid));
	return merge(lstl, lstr);
}